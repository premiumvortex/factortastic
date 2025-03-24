import json
import os
import boto3
import logging
from botocore.exceptions import ClientError
import time

# from aws_xray_sdk.core import patch_all

# # Enable X-Ray tracing
# try:
#     patch_all()
# except Exception:
#     # X-Ray not available in local testing
#     pass

# Configure structured logging
class CustomFormatter(logging.Formatter):
    """Custom formatter that creates more readable, structured logs"""
    
    FORMATS = {
        logging.DEBUG: "🔍 DEBUG: %(message)s",
        logging.INFO: "ℹ️ INFO: %(message)s",
        logging.WARNING: "⚠️ WARNING: %(message)s",
        logging.ERROR: "❌ ERROR: %(message)s",
        logging.CRITICAL: "🔥 CRITICAL: %(message)s"
    }
    
    def format(self, record):
        log_fmt = self.FORMATS.get(record.levelno)
        formatter = logging.Formatter(log_fmt)
        return formatter.format(record)

# Set up logger with custom formatter
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Only add handler if running in Lambda (not during module import)
if len(logger.handlers) > 0:
    # Remove default handler to avoid duplicate logs
    logger.handlers.clear()
    
    # Add custom handler
    handler = logging.StreamHandler()
    handler.setFormatter(CustomFormatter())
    logger.addHandler(handler)

def get_table():
    """
    Returns a DynamoDB Table object for the Decks table.
    Uses the DATABASE_URL (for local DynamoDB endpoint) and DECKS_TABLE_NAME from environment variables.
    """
    dynamodb_endpoint = os.environ.get("DATABASE_URL")
    table_name = os.environ.get("DECKS_TABLE_NAME")

    if not table_name:
        raise ValueError("DECKS_TABLE_NAME environment variable is not set")

    logger.info(f"Connecting to DynamoDB at endpoint: {dynamodb_endpoint or 'default'}")
    logger.info(f"Using table name: {table_name}")

    try:
        if dynamodb_endpoint:
            dynamodb = boto3.resource("dynamodb", endpoint_url=dynamodb_endpoint)
        else:
            dynamodb = boto3.resource("dynamodb")
        
        table = dynamodb.Table(table_name)
        # Validate table exists by making a simple API call
        table.table_status  # This will raise an exception if table doesn't exist
        return table
    except Exception as e:
        logger.error(f"Failed to initialize DynamoDB table: {str(e)}")
        raise

def build_cors_headers(event):
    """Build and return CORS headers based on the ALLOWED_ORIGINS env variable."""
    allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
    origin = event.get("headers", {}).get("Origin", "")
    
    if origin in allowed_origins:
        allow_origin_header = origin
    else:
        allow_origin_header = "*"  # Fallback for development

    return {
        "Access-Control-Allow-Origin": allow_origin_header,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }

def handle_list_decks(headers):
    """Handle GET request to list all unique deck IDs."""
    try:
        table = get_table()
        
        # Use scan with projection expression to get only deckId
        response = table.scan(
            ProjectionExpression="deckId",
            Select="SPECIFIC_ATTRIBUTES"
        )
        
        # Extract unique deck IDs
        deck_ids = {item['deckId'] for item in response.get('Items', [])}
        
        logger.info(f"Successfully retrieved {len(deck_ids)} unique deck IDs")
        
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"decks": list(deck_ids)})
        }
    except ClientError as e:
        error_code = e.response['Error']['Code']
        error_message = e.response['Error']['Message']
        logger.error(f"DynamoDB error: {error_code} - {error_message}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({
                "message": "Database error",
                "error": error_code,
                "details": error_message
            })
        }
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({
                "message": "Internal server error",
                "error": str(e)
            })
        }

def handle_get_deck(event, headers):
    """Handle GET request for a specific deck."""
    deck_id = event.get("pathParameters", {}).get("deckId")
    
    if not deck_id:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Missing deckId parameter"})
        }

    table = get_table()
    
    try:
        # Query all items for this deck_id, ordered by the 'order' attribute
        response = table.query(
            KeyConditionExpression="deckId = :did",
            ExpressionAttributeValues={":did": deck_id},
            ScanIndexForward=True  # This ensures cards are returned in ascending order
        )
        
        if not response['Items']:
            return {
                "statusCode": 404,
                "headers": headers,
                "body": json.dumps({"message": f"Deck {deck_id} not found"})
            }
        
        # Convert Decimal objects to regular numbers before JSON serialization
        def decimal_to_number(obj):
            if isinstance(obj, dict):
                return {k: decimal_to_number(v) for k, v in obj.items()}
            elif isinstance(obj, list):
                return [decimal_to_number(x) for x in obj]
            elif isinstance(obj, boto3.dynamodb.types.Decimal):
                return float(obj) if '.' in str(obj) else int(obj)
            return obj
        
        cards = decimal_to_number(response['Items'])
        
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({
                "deckId": deck_id,
                "cards": cards
            })
        }
    except ClientError as e:
        logger.error(f"DynamoDB error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Database error", "error": e.response['Error']['Code']})
        }
    except Exception as e:
        logger.error(f"Error retrieving deck {deck_id}: {str(e)}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Error retrieving deck"})
        }

def log_request_summary(event):
    """Log a concise summary of the incoming request"""
    http_method = event.get("httpMethod", "UNKNOWN")
    path = event.get("path", "UNKNOWN")
    origin = event.get("headers", {}).get("Origin", "UNKNOWN")
    deck_id = event.get("pathParameters", {}).get("deckId") if event.get("pathParameters") else None
    
    summary = f"Request: {http_method} {path}"
    if deck_id:
        summary += f" (deckId: {deck_id})"
    summary += f" | Origin: {origin}"
    
    logger.info(summary)

def lambda_handler(event, context):
    """Main Lambda handler."""
    start_time = time.time()
    request_id = context.aws_request_id if context else "local"
    
    # Log concise request summary instead of full event
    log_request_summary(event)
    
    headers = build_cors_headers(event)

    # Handle CORS preflight requests
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 204,
            "headers": headers,
            "body": ""
        }

    if event.get("httpMethod") != "GET":
        return {
            "statusCode": 405,
            "headers": headers,
            "body": json.dumps({"message": "Method not allowed"})
        }

    # Route the request based on path parameters
    result = None
    if event.get("pathParameters") is None:
        # No path parameters means list all decks
        result = handle_list_decks(headers)
    else:
        # Path parameter present means get specific deck
        result = handle_get_deck(event, headers)
    
    # Log execution summary
    execution_time = (time.time() - start_time) * 1000
    logger.info(f"Request completed: status={result['statusCode']} | time={execution_time:.2f}ms | requestId={request_id}")
    
    return result
