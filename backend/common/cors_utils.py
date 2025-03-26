import os

def build_cors_headers(event, allowed_origins=None):
    """
    Build and return CORS headers based on the origin of the request.
    
    Args:
        event (dict): The Lambda event object containing request details
        allowed_origins (list, optional): List of allowed origins to override the environment variable
            If not provided, uses ALLOWED_ORIGINS environment variable
    
    Returns:
        dict: A dictionary of CORS headers
    """
    # Get allowed origins from parameter or environment variable
    if allowed_origins is None:
        # Parse comma-separated list from environment variable
        allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
        # Filter out empty strings that might result from trailing commas
        allowed_origins = [origin.strip() for origin in allowed_origins if origin.strip()]
    
    # Get the origin from the request headers
    origin = event.get("headers", {}).get("Origin", "")
    
    # Set the Access-Control-Allow-Origin header based on the request origin
    if origin in allowed_origins:
        allow_origin_header = origin
    elif "*" in allowed_origins:  # Support wildcard (use with caution in production)
        allow_origin_header = "*"
    else:
        allow_origin_header = ""  # No matching origin, don't allow CORS
    
    # Build the basic CORS headers
    headers = {
        "Access-Control-Allow-Origin": allow_origin_header,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        "Access-Control-Max-Age": "86400",  # 24 hours
    }
    
    return headers

def handle_options_request(event, additional_methods=None, additional_headers=None):
    """
    Handle OPTIONS requests (CORS preflight).
    
    Args:
        event (dict): The Lambda event object
        additional_methods (list, optional): Additional HTTP methods to allow
        additional_headers (list, optional): Additional headers to allow
    
    Returns:
        dict: A Lambda response object with appropriate CORS headers
    """
    # Get the basic CORS headers
    headers = build_cors_headers(event)
    
    # Get the path and path parameters to determine allowed methods
    path = event.get("path", "")
    path_params = event.get("pathParameters") or {}
    
    # Determine allowed methods based on the resource and any additional methods
    allowed_methods = ["OPTIONS"]
    
    # Add additional methods if provided
    if additional_methods:
        allowed_methods.extend(additional_methods)
    
    # Convert the list to a comma-separated string
    allowed_methods_str = ", ".join(allowed_methods)
    
    # Update the headers with the allowed methods
    headers["Access-Control-Allow-Methods"] = allowed_methods_str
    headers["Allow"] = allowed_methods_str
    
    # Add any additional headers to the Access-Control-Allow-Headers
    if additional_headers:
        current_headers = headers["Access-Control-Allow-Headers"].split(", ")
        all_headers = list(set(current_headers + additional_headers))
        headers["Access-Control-Allow-Headers"] = ", ".join(all_headers)
    
    # Return a 204 No Content response for OPTIONS requests
    return {
        "statusCode": 204,
        "headers": headers,
        "body": ""
    } 