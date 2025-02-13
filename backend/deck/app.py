import json
import os
import boto3
from botocore.exceptions import ClientError
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def get_s3_client():
    """Returns an S3 client"""
    return boto3.client('s3')

def build_cors_headers(event):
    """Build and return CORS headers based on the ALLOWED_ORIGINS env variable."""
    allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
    origin = event.get("headers", {}).get("Origin", "")
    
    headers = {
        "Access-Control-Allow-Origin": origin if origin in allowed_origins else "null",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }
    return headers

def get_deck_data(deck_id=None):
    """
    Fetch deck data from S3. If deck_id is None, return list of all decks.
    Otherwise, return specific deck data.
    """
    s3 = get_s3_client()
    bucket = os.environ['DECKS_S3_BUCKET_NAME']
    
    try:
        if deck_id:
            # Get specific deck data
            key = f'decks/{deck_id}.json'
            response = s3.get_object(Bucket=bucket, Key=key)
            return json.loads(response['Body'].read().decode('utf-8'))
        else:
            # List all decks
            key = 'decks/index.json'
            response = s3.get_object(Bucket=bucket, Key=key)
            return json.loads(response['Body'].read().decode('utf-8'))
    except ClientError as e:
        if e.response['Error']['Code'] == 'NoSuchKey':
            return None
        raise

def handle_get_decks(headers):
    """Handle GET /decks request"""
    try:
        decks = get_deck_data()
        if decks is None:
            return {
                "statusCode": 404,
                "headers": headers,
                "body": json.dumps({"message": "No decks found"})
            }
        
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps(decks)
        }
    except Exception as e:
        logger.error("Error fetching decks: %s", str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Internal server error"})
        }

def handle_get_deck(event, headers):
    """Handle GET /decks/{deckId} request"""
    deck_id = event.get("pathParameters", {}).get("deckId")
    
    if not deck_id:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Missing deckId parameter"})
        }
    
    try:
        deck_data = get_deck_data(deck_id)
        if deck_data is None:
            return {
                "statusCode": 404,
                "headers": headers,
                "body": json.dumps({"message": f"Deck {deck_id} not found"})
            }
        
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps(deck_data)
        }
    except Exception as e:
        logger.error("Error fetching deck %s: %s", deck_id, str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Internal server error"})
        }

def lambda_handler(event, context):
    """Main Lambda handler"""
    headers = build_cors_headers(event)
    
    # Handle CORS preflight requests
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 204,
            "headers": headers,
            "body": None
        }
    
    if event.get("httpMethod") != "GET":
        return {
            "statusCode": 405,
            "headers": headers,
            "body": json.dumps({"message": "Method not allowed"})
        }
    
    # Route the request based on path
    path = event.get("path", "")
    if path == "/decks":
        return handle_get_decks(headers)
    elif path.startswith("/decks/"):
        return handle_get_deck(event, headers)
    else:
        return {
            "statusCode": 404,
            "headers": headers,
            "body": json.dumps({"message": "Not found"})
        }
