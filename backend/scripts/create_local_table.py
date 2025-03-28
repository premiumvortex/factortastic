import boto3
import json
import os
import time
import logging
from botocore.exceptions import ClientError

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def get_dynamodb_client():
    """Create a DynamoDB client that works for both local and production environments."""
    max_retries = 5
    retry_count = 0
    endpoint_url = os.getenv('DATABASE_URL')
    
    while retry_count < max_retries:
        try:
            if endpoint_url:  # Local development
                client = boto3.resource('dynamodb',
                    endpoint_url=endpoint_url,
                    region_name='us-east-1',
                    aws_access_key_id='dummy',
                    aws_secret_access_key='dummy'
                )
            else:  # Production
                client = boto3.resource('dynamodb')
            
            # Test connection
            client.meta.client.list_tables()
            return client
        except Exception as e:
            retry_count += 1
            logger.warning(f"Failed to connect to DynamoDB (attempt {retry_count}/{max_retries}): {str(e)}")
            if retry_count < max_retries:
                time.sleep(5)
            else:
                logger.error("Failed to connect to DynamoDB after all retries")
                raise

def create_table(dynamodb, table_name, key_schema, attribute_definitions):
    """Generic function to create a DynamoDB table."""
    try:
        table = dynamodb.create_table(
            TableName=table_name,
            KeySchema=key_schema,
            AttributeDefinitions=attribute_definitions,
            BillingMode='PAY_PER_REQUEST'
        )
        table.wait_until_exists()
        logger.info(f"Created table {table_name}")
        return table
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceInUseException':
            logger.info(f"Table {table_name} already exists")
            return dynamodb.Table(table_name)
        else:
            logger.error(f"Error creating table {table_name}: {str(e)}")
            raise

def initialize_game_table(dynamodb, table_name):
    """Initialize the Game table with its schema."""
    key_schema = [
        {'AttributeName': 'gameId', 'KeyType': 'HASH'}
    ]
    attribute_definitions = [
        {'AttributeName': 'gameId', 'AttributeType': 'S'}
    ]
    return create_table(dynamodb, table_name, key_schema, attribute_definitions)

def initialize_decks_table(dynamodb, table_name):
    """Initialize the Decks table with its schema."""
    key_schema = [
        {'AttributeName': 'deckId', 'KeyType': 'HASH'},
        {'AttributeName': 'deckOrder', 'KeyType': 'RANGE'}
    ]
    attribute_definitions = [
        {'AttributeName': 'deckId', 'AttributeType': 'S'},
        {'AttributeName': 'deckOrder', 'AttributeType': 'N'}
    ]
    return create_table(dynamodb, table_name, key_schema, attribute_definitions)

def load_json_data(file_path):
    """Load and validate JSON data from a file."""
    try:
        with open(file_path, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        logger.error(f"Data file not found: {file_path}")
        raise
    except json.JSONDecodeError:
        logger.error(f"Invalid JSON in file: {file_path}")
        raise

def populate_decks_table(table, data):
    """Populate the Decks table with the provided data."""
    try:
        with table.batch_writer() as batch:
            for deck in data['decks']:
                # Ensure deck is properly formatted for DynamoDB
                batch.put_item(Item=deck)
        logger.info(f"Successfully loaded {len(data['decks'])} decks into {table.table_name}")
    except Exception as e:
        logger.error(f"Error loading deck data: {str(e)}")
        raise

def main():
    """Main function to orchestrate table creation and data loading."""
    # Validate environment variables
    game_table_name = os.getenv('DYNAMODB_TABLE_NAME')
    decks_table_name = os.getenv('DECKS_TABLE_NAME')
    
    if not game_table_name or not decks_table_name:
        raise ValueError("DYNAMODB_TABLE_NAME and DECKS_TABLE_NAME must be set")

    logger.info("Starting table creation script...")
    
    # Initialize DynamoDB client
    dynamodb = get_dynamodb_client()
    
    # Create tables
    game_table = initialize_game_table(dynamodb, game_table_name)
    decks_table = initialize_decks_table(dynamodb, decks_table_name)
    
    # Load deck data
    try:
        decks_data = load_json_data('data/decks.json')
        populate_decks_table(decks_table, decks_data)
    except Exception as e:
        logger.error(f"Failed to load deck data: {str(e)}")
        raise

if __name__ == "__main__":
    main() 