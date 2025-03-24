import json
import logging
import time
from decimal import Decimal

class DecimalEncoder(json.JSONEncoder):
    """JSON encoder that handles Decimal objects from DynamoDB."""
    def default(self, obj):
        if isinstance(obj, Decimal):
            return str(obj)
        return super(DecimalEncoder, self).default(obj)

class CustomFormatter(logging.Formatter):
    """Custom formatter that creates more readable, structured logs."""
    
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

def setup_logging():
    """Configure and return a logger with custom formatting."""
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
    
    return logger

def log_request_summary(logger, event, resource_id_key=None):
    """
    Log a concise summary of the incoming request.
    
    Args:
        logger: The logger instance
        event: The Lambda event object
        resource_id_key: The key name in pathParameters to extract (e.g., 'gameId', 'deckId')
    """
    http_method = event.get("httpMethod", "UNKNOWN")
    path = event.get("path", "UNKNOWN")
    origin = event.get("headers", {}).get("Origin", "UNKNOWN")
    
    resource_id = None
    if resource_id_key and event.get("pathParameters"):
        resource_id = event.get("pathParameters", {}).get(resource_id_key)
    
    summary = f"Request: {http_method} {path}"
    if resource_id:
        summary += f" ({resource_id_key}: {resource_id})"
    summary += f" | Origin: {origin}"
    
    logger.info(summary)

def create_lambda_handler(handler_function):
    """
    Decorator for Lambda handlers that adds logging, timing, and error handling.
    
    Args:
        handler_function: The actual handler function to wrap
    
    Returns:
        A wrapped handler function with added logging and error handling
    """
    def wrapper(event, context):
        logger = setup_logging()
        start_time = time.time()
        request_id = context.aws_request_id if context else "local"
        
        try:
            # Execute the actual handler
            result = handler_function(event, context, logger)
            
            # Log execution summary
            execution_time = (time.time() - start_time) * 1000
            logger.info(f"Request completed: status={result['statusCode']} | time={execution_time:.2f}ms | requestId={request_id}")
            
            return result
        except Exception as e:
            # Log the error
            execution_time = (time.time() - start_time) * 1000
            logger.error(f"Request failed: error={str(e)} | time={execution_time:.2f}ms | requestId={request_id}")
            
            # Return a 500 error response
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"message": "Internal server error"})
            }
    
    return wrapper 