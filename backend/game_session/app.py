import json
import os
import uuid
import boto3
import sys
import time
from botocore.exceptions import ClientError

# Add the parent directory to sys.path to allow importing from common
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from common.logging_utils import setup_logging, log_request_summary, create_lambda_handler, DecimalEncoder

# Set up logger
logger = setup_logging()

# Check if we're running in AWS Lambda or locally
# AWS Lambda sets AWS_EXECUTION_ENV environment variable
is_lambda_environment = os.environ.get('AWS_EXECUTION_ENV') is not None

# Only use X-Ray in AWS Lambda environment
if is_lambda_environment:
    try:
        from aws_xray_sdk.core import patch_all
        # Enable X-Ray tracing
        patch_all()
        logger.info("AWS X-Ray SDK initialized")
    except ImportError:
        logger.warning("AWS X-Ray SDK not available, tracing disabled")
else:
    logger.info("Running in local environment, X-Ray tracing disabled")

# --- Helper Functions ---

def get_table():
    """
    Returns a DynamoDB Table object.
    Uses the DATABASE_URL (for local DynamoDB endpoint) and DYNAMODB_TABLE_NAME from environment variables.
    """
    dynamodb_endpoint = os.environ.get("DATABASE_URL")  # e.g., http://localhost:8000 for DynamoDB Local
    table_name = os.environ.get("DYNAMODB_TABLE_NAME", "GameTable")

    logger.info(f"Connecting to DynamoDB at endpoint: {dynamodb_endpoint or 'default'}")
    logger.info(f"Using table name: {table_name}")

    if dynamodb_endpoint:
        dynamodb = boto3.resource("dynamodb", endpoint_url=dynamodb_endpoint)
    else:
        dynamodb = boto3.resource("dynamodb")

    return dynamodb.Table(table_name)

def build_cors_headers(event):
    """
    Build and return CORS headers based on the ALLOWED_ORIGINS env variable.
    """
    allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
    origin = event.get("headers", {}).get("Origin", "")
    if origin in allowed_origins:
        allow_origin_header = origin
    else:
        allow_origin_header = "null"

    headers = {
        "Access-Control-Allow-Origin": allow_origin_header,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }
    return headers

# --- Request Handlers ---

def handle_get(event, headers):
    """
    Handle GET requests.
    Expects a path parameter 'gameId' to retrieve a specific game record.
    """
    path_params = event.get("pathParameters") or {}
    game_id = path_params.get("gameId")

    if not game_id:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Missing gameId in path parameters"})
        }

    table = get_table()

    try:
        response = table.get_item(Key={"gameId": game_id})
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
        }

    item = response.get("Item")
    if not item:
        return {
            "statusCode": 404,
            "headers": headers,
            "body": json.dumps({"message": "Game not found"})
        }

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps(item, cls=DecimalEncoder)
    }

def handle_post(event, headers):
    """
    Handle POST requests.
    Creates a new game record in DynamoDB.
    """
    try:
        request_body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError as e:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Invalid JSON format", "error": str(e)})
        }

    # Validate request body
    if not isinstance(request_body, dict):
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Request body must be a JSON object"})
        }

    # Generate a new unique game ID
    game_id = str(uuid.uuid4())
    table = get_table()
    
    # Add TTL - game records expire after 24 hours
    # ttl = int(time.time()) + (24 * 60 * 60)
    
    item = {
        "gameId": game_id,
        "status": "new",
        "data": request_body,
        # "ttl": ttl,
        "createdAt": int(time.time())
    }
    
    # Implement retry logic
    max_retries = 3
    retry_count = 0
    
    while retry_count < max_retries:
        try:
            table.put_item(Item=item)
            break
        except ClientError as e:
            error_code = e.response['Error']['Code']
            if error_code == 'ProvisionedThroughputExceededException':
                retry_count += 1
                if retry_count < max_retries:
                    time.sleep(2 ** retry_count)  # Exponential backoff
                    continue
            logger.error(f"DynamoDB error: {str(e)}")
            return {
                "statusCode": 500,
                "headers": headers,
                "body": json.dumps({"message": "Database error", "error": error_code})
            }
        except Exception as e:
            logger.error(f"Unexpected error: {str(e)}")
            return {
                "statusCode": 500,
                "headers": headers,
                "body": json.dumps({"message": "Internal server error"})
            }

    return {
        "statusCode": 201,
        "headers": headers,
        "body": json.dumps({"gameId": game_id})
    }

def handle_options(event, headers):
    """
    Handle OPTIONS requests.
    Returns a 200 OK response with appropriate CORS headers and information about allowed methods.
    """
    # Get the path to determine which methods are allowed for this resource
    path = event.get("path", "")
    path_params = event.get("pathParameters") or {}
    
    # Determine allowed methods based on the path
    if path.endswith("/games") and not path_params.get("gameId"):
        allowed_methods = "GET, POST, OPTIONS"
    elif path_params.get("gameId"):
        allowed_methods = "GET, OPTIONS"
    else:
        allowed_methods = "OPTIONS"
    
    # Add the Allow header to indicate which methods are supported
    response_headers = headers.copy()
    response_headers["Access-Control-Allow-Methods"] = allowed_methods
    response_headers["Allow"] = allowed_methods
    
    return {
        "statusCode": 200,
        "headers": response_headers,
        "body": json.dumps({
            "allowedMethods": allowed_methods.split(", ")
        })
    }

# --- Main Lambda Handler ---

def _lambda_handler(event, context, logger):
    """Internal handler implementation."""
    # Log concise request summary
    log_request_summary(logger, event, resource_id_key="gameId")
    
    headers = build_cors_headers(event)

    # Handle CORS preflight requests
    if event.get("httpMethod") == "OPTIONS":
        result = handle_options(event, headers)
    elif event.get("httpMethod") == "GET":
        result = handle_get(event, headers)
    elif event.get("httpMethod") == "POST":
        result = handle_post(event, headers)
    else:
        result = {
            "statusCode": 405,
            "headers": headers,
            "body": json.dumps({"message": "Method not allowed"})
        }
    
    return result

# Use the decorator to create the actual Lambda handler
lambda_handler = create_lambda_handler(_lambda_handler)
