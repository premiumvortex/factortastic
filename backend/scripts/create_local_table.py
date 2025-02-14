import boto3
import os
import time
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def create_local_table():
    logger.info("Starting table creation script...")
    logger.info(f"Using endpoint URL: {os.getenv('DATABASE_URL', 'http://localhost:8000')}")
    
    # Add retry logic for initial connection
    max_retries = 5
    retry_count = 0
    
    while retry_count < max_retries:
        try:
            dynamodb = boto3.client('dynamodb',
                                endpoint_url=os.getenv('DATABASE_URL', 'http://localhost:8000'),
                                region_name='us-east-1',
                                aws_access_key_id='dummy',
                                aws_secret_access_key='dummy')
            
            # Test connection
            dynamodb.list_tables()
            break
        except Exception as e:
            retry_count += 1
            logger.warning(f"Failed to connect to DynamoDB (attempt {retry_count}/{max_retries}): {str(e)}")
            if retry_count < max_retries:
                time.sleep(5)
            else:
                logger.error("Failed to connect to DynamoDB after all retries")
                raise

    table_name = os.getenv('DYNAMODB_TABLE_NAME', 'GameTable')
    logger.info(f"Attempting to create table: {table_name}")

    try:
        dynamodb.create_table(
            TableName=table_name,
            AttributeDefinitions=[
                {
                    'AttributeName': 'gameId',
                    'AttributeType': 'S'
                }
            ],
            KeySchema=[
                {
                    'AttributeName': 'gameId',
                    'KeyType': 'HASH'
                }
            ],
            BillingMode='PAY_PER_REQUEST'
        )
        logger.info(f"Table {table_name} created successfully")
    except dynamodb.exceptions.ResourceInUseException:
        logger.info(f"Table {table_name} already exists")
    except Exception as e:
        logger.error(f"Error creating table: {str(e)}")
        raise

if __name__ == "__main__":
    create_local_table() 