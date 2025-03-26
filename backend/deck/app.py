import json
import os
import boto3
from botocore.exceptions import ClientError
import sys

# Import common logging utilities
from common.logging_utils import setup_logging, log_request_summary, create_lambda_handler
# Import common CORS utilities
from common.cors_utils import build_cors_headers, handle_options_request

# Set up logger
logger = setup_logging()

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

def _lambda_handler(event, context, logger):
    """Internal handler implementation."""
    # Log concise request summary
    log_request_summary(logger, event, resource_id_key="deckId")
    
    headers = build_cors_headers(event)

    # Handle CORS preflight requests
    if event.get("httpMethod") == "OPTIONS":
        # Use the common CORS utility to handle OPTIONS requests
        path = event.get("path", "")
        path_params = event.get("pathParameters") or {}
        
        # Determine additional methods based on the path
        additional_methods = ["GET"]
        
        return handle_options_request(event, additional_methods=additional_methods)

    if event.get("httpMethod") != "GET":
        return {
            "statusCode": 405,
            "headers": headers,
            "body": json.dumps({"message": "Method not allowed"})
        }

    # Route the request based on path parameters
    if event.get("pathParameters") is None:
        # No path parameters means list all decks
        result = handle_list_decks(headers)
    else:
        # Path parameter present means get specific deck
        result = handle_get_deck(event, headers)
    
    return result

# Use the decorator to create the actual Lambda handler
lambda_handler = create_lambda_handler(_lambda_handler)
