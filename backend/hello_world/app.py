import json
import os

# import requests


def lambda_handler(event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e

    # Retrieve the allowed origin from environment variables
    allowed_origin = os.getenv("FRONTEND_URL")


    # Your actual response logic
    response_body = {
        "message": "Hello from Lambda!"
    }

    # Add CORS headers to the response
    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": allowed_origin,  # Allow requests from the frontend URL
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",  # Supported methods
            "Access-Control-Allow-Headers": "Content-Type, Authorization",  # Supported headers
        },
        "body": json.dumps(response_body)  # Convert the body to JSON
    }

    # Handle OPTIONS requests for preflight
    if event["httpMethod"] == "OPTIONS":
        response["statusCode"] = 204  # No content for OPTIONS
        response["body"] = None

    return response