import json
import os
import uuid
import boto3
import logging
from decimal import Decimal
from botocore.exceptions import ClientError
from aws_xray_sdk.core import patch_all
import time

# Enable X-Ray tracing
patch_all()

# Add this class at the top level of your file
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return str(obj)
        return super(DecimalEncoder, self).default(obj)

# --- Helper Functions ---

def get_table():
    """
    Returns a DynamoDB Table object.
    Uses the DATABASE_URL (for local DynamoDB endpoint) and DYNAMODB_TABLE_NAME from environment variables.
    """
    dynamodb_endpoint = os.environ.get("DATABASE_URL")  # e.g., http://localhost:8000 for DynamoDB Local
    table_name = os.environ.get("DYNAMODB_TABLE_NAME", "GameTable")

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

    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    
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
            logger.error("DynamoDB error: %s", str(e))
            return {
                "statusCode": 500,
                "headers": headers,
                "body": json.dumps({"message": "Database error", "error": error_code})
            }
        except Exception as e:
            logger.error("Unexpected error: %s", str(e))
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

# --- Main Lambda Handler ---

def lambda_handler(event, context):
    headers = build_cors_headers(event)

    # Handle CORS preflight requests
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 204,
            "headers": headers,
            "body": None
        }

    method = event.get("httpMethod")

    if method == "GET":
        return handle_get(event, headers)
    elif method == "POST":
        return handle_post(event, headers)
    else:
        return {
            "statusCode": 405,
            "headers": headers,
            "body": json.dumps({"message": "Method not allowed"})
        }
