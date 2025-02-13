import json
import os
import uuid
import boto3
import logging

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
        "body": json.dumps(item)
    }

def handle_post(event, headers):
    """
    Handle POST requests.
    Creates a new game record in DynamoDB.
    The backend generates a unique game ID and returns it.
    Expects a JSON body with optional game data.
    """
    try:
        request_body = json.loads(event.get("body") or "{}")
    except Exception as e:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Invalid JSON", "error": str(e)})
        }

    # Generate a new unique game ID
    game_id = str(uuid.uuid4())
    table = get_table()
    item = {
        "gameId": game_id,
        "status": "new",
        "data": request_body  # Store any additional game data here
    }
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    logger.info("Attempting to put item into table %s", os.environ.get("DYNAMODB_TABLE_NAME"))

    try:
        table.put_item(Item=item)
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
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
