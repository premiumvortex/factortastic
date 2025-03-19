import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCreateGame, useGame } from '../useGame';

// Simple component that uses hooks to create and then fetch a game
const CreateAndFetchGameComponent = () => {
  const [gameId, setGameId] = useState(null);
  const [formData, setFormData] = useState([
    { name: '', value: '' },
    { name: '', value: '' },
    { name: '', value: '' }
  ]);
  
  // Create game mutation
  const { 
    mutate: createGame, 
    isLoading: isCreating,
    error: createError 
  } = useCreateGame({
    onSuccess: (data) => {
      console.log('Game created:', data);
      setGameId(data.gameId);
    }
  });

  // Fetch game query (only runs when gameId is available)
  const {
    data: gameData,
    isLoading: isFetching,
    error: fetchError
  } = useGame(gameId);

  const handleInputChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  const handleCreateGame = () => {
    // Reset gameId if creating a new game
    setGameId(null);
    
    // Build game config from form data
    const gameConfig = {};
    
    // Add non-empty form fields to the config
    formData.forEach(row => {
      if (row.name.trim() && row.value.trim()) {
        // Try to parse as JSON if it looks like an object or array
        if ((row.value.startsWith('{') && row.value.endsWith('}')) || 
            (row.value.startsWith('[') && row.value.endsWith(']'))) {
          try {
            gameConfig[row.name] = JSON.parse(row.value);
          } catch (e) {
            // If parsing fails, use as string
            gameConfig[row.name] = row.value;
          }
        } else if (row.value === 'true') {
          gameConfig[row.name] = true;
        } else if (row.value === 'false') {
          gameConfig[row.name] = false;
        } else if (!isNaN(Number(row.value))) {
          gameConfig[row.name] = Number(row.value);
        } else {
          gameConfig[row.name] = row.value;
        }
      }
    });
    
    // Add default values if form is completely empty
    if (Object.keys(gameConfig).length === 0) {
      gameConfig.players = [];
      gameConfig.settings = {
        maxPlayers: 4,
        timeLimit: 300
      };
    }
    
    createGame(gameConfig);
  };

  return (
    <div style={{ padding: '15px', maxWidth: '800px' }}>
      <h2 style={{ marginTop: 0, marginBottom: '10px' }}>Game API Test (Real API)</h2>
      
      {/* Form for game configuration */}
      <div style={{ 
        display: 'flex', 
        marginBottom: '15px',
        gap: '20px'
      }}>
        <div style={{ flex: '2' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Game Configuration</h3>
          <p style={{ fontSize: '14px', color: '#666', margin: '0 0 10px 0' }}>
            Enter key-value pairs for your game configuration.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '8px',
            marginBottom: '10px'
          }}>
            <div style={{ fontWeight: 'bold', padding: '2px' }}>Property Name</div>
            <div style={{ fontWeight: 'bold', padding: '2px' }}>Value</div>
            
            {formData.map((row, index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  placeholder={`Property ${index + 1}`}
                  style={{
                    padding: '6px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
                <input
                  type="text"
                  value={row.value}
                  onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                  placeholder={`Value ${index + 1}`}
                  style={{
                    padding: '6px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </React.Fragment>
            ))}
          </div>
          
          <button 
            onClick={handleCreateGame}
            disabled={isCreating}
            style={{
              padding: '8px 16px',
              backgroundColor: isCreating ? '#cccccc' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isCreating ? 'not-allowed' : 'pointer',
              marginTop: '5px'
            }}
          >
            {isCreating ? 'Creating...' : 'Create New Game'}
          </button>
        </div>
        
        {/* Tips section - now on the side */}
        <div style={{ 
          flex: '1',
          backgroundColor: 'white',
          padding: '2% 2% 2% 2%',
          borderRadius: '4px',
          fontSize: '13px', 
          color: '#333',
          alignSelf: 'center'
        }}>
          <p style={{ color: "red", fontWeight: 'bold', margin: '0 0 5px 0' }}>Tips:</p>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            <li>For objects: <code>{'{\"key\":\"value\"}'}</code></li>
            <li>For arrays: <code>[1,2,3]</code></li>
            <li>Numbers and booleans are auto-converted</li>
            <li>Empty form uses defaults</li>
          </ul>
        </div>
      </div>
      
      {/* Results section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Error display for creation */}
        {createError && (
          <div style={{ 
            backgroundColor: '#ffebee', 
            color: '#d32f2f', 
            padding: '8px', 
            borderRadius: '4px'
          }}>
            Error creating game: {createError.message}
          </div>
        )}
        
        {/* Game creation result */}
        {gameId && (
          <div style={{ 
            backgroundColor: '#e8f5e9', 
            padding: '10px', 
            borderRadius: '4px'
          }}>
            <h3 style={{ margin: '0 0 5px 0' }}>Game Created Successfully</h3>
            <p style={{ margin: '0' }}><strong>Game ID:</strong> {gameId}</p>
          </div>
        )}
        
        {/* Loading state for fetch */}
        {gameId && isFetching && (
          <div style={{ 
            backgroundColor: '#e3f2fd', 
            padding: '8px', 
            borderRadius: '4px'
          }}>
            <p style={{ margin: '0' }}>Fetching game data...</p>
          </div>
        )}
        
        {/* Error display for fetch */}
        {fetchError && (
          <div style={{ 
            backgroundColor: '#ffebee', 
            color: '#d32f2f', 
            padding: '8px', 
            borderRadius: '4px'
          }}>
            Error fetching game: {fetchError.message}
          </div>
        )}
        
        {/* Game data display */}
        {gameData && (
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '10px', 
            borderRadius: '4px' 
          }}>
            <h3 style={{ margin: '0 0 5px 0' }}>Game Data Retrieved</h3>
            <pre style={{ 
              backgroundColor: '#eeeeee', 
              padding: '8px', 
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '150px',
              margin: '0'
            }}>
              {JSON.stringify(gameData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

// Create a new QueryClient for each story
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

export default {
  title: 'API/RealCreateGame',
  component: CreateAndFetchGameComponent,
  decorators: [
    (Story) => (
      <QueryClientProvider client={createQueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

// Story that makes real API calls
export const LiveAPITest = {}; 