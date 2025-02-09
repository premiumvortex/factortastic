import json
import os
import uuid
import boto3

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
        allow_origin_header = "null"  # Could also return a default safe value or deny

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
    Expect a query parameter 'gameId' to retrieve a specific game record.
    """
    params = event.get("queryStringParameters") or {}
    game_id = params.get("gameId")

    if not game_id:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Missing 'gameId' query parameter"})
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
    Expects a JSON body with optional game data.
    """
    try:
        # print(event.get("body"))
        request_body = json.loads(event.get("body") or "{}")
    except Exception as e:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Invalid JSON", "error": str(e)})
        }

    game_id = str(uuid.uuid4())
    table = get_table()
    item = {
        "gameId": game_id,
        "status": "new",
        "data": request_body  # Storing any additional data provided in the request
    }

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
