import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDecks, useDeck } from '../useDeck';

// Component for browsing decks - using real API calls
const DeckBrowserComponent = () => {
  const [selectedDeckId, setSelectedDeckId] = useState(null);
  
  // Fetch list of decks from real API
  const { 
    data: decksData, 
    isLoading: isLoadingDecks, 
    error: decksError 
  } = useDecks();

  // Fetch selected deck details from real API
  const {
    data: deckDetails,
    isLoading: isLoadingDeckDetails,
    error: deckDetailsError
  } = useDeck(selectedDeckId);

  const handleSelectDeck = (deckId) => {
    setSelectedDeckId(deckId);
  };

  return (
    <div style={{ padding: '15px', maxWidth: '800px' }}>
      <h2 style={{ marginTop: 0, marginBottom: '10px' }}>Deck Browser (Real API)</h2>
      
      <div style={{ 
        display: 'flex', 
        gap: '20px'
      }}>
        {/* Decks list section */}
        <div style={{ flex: '1' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Available Decks</h3>
          
          {isLoadingDecks && (
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '8px', 
              borderRadius: '4px',
              marginBottom: '10px'
            }}>
              <p style={{ margin: '0' }}>Loading decks...</p>
            </div>
          )}
          
          {decksError && (
            <div style={{ 
              backgroundColor: '#ffebee', 
              color: '#d32f2f', 
              padding: '8px', 
              borderRadius: '4px',
              marginBottom: '10px'
            }}>
              Error loading decks: {decksError.message}
            </div>
          )}
          
          {decksData && decksData.decks && (
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {decksData.decks.map(deckId => (
                <button
                  key={deckId}
                  onClick={() => handleSelectDeck(deckId)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: selectedDeckId === deckId ? '#4CAF50' : '#f0f0f0',
                    color: selectedDeckId === deckId ? 'white' : '#333',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontWeight: selectedDeckId === deckId ? 'bold' : 'normal'
                  }}
                >
                  {deckId}
                </button>
              ))}
            </div>
          )}
          
          {/* API Response for decks list */}
          <div style={{ 
            marginTop: '15px',
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '4px'
          }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>GET /decks Response:</h4>
            <pre style={{ 
              backgroundColor: '#eeeeee', 
              padding: '8px', 
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '120px',
              margin: '0',
              fontSize: '12px'
            }}>
              {decksData ? JSON.stringify(decksData, null, 2) : 'No data yet'}
            </pre>
          </div>
        </div>
        
        {/* Deck details section */}
        <div style={{ flex: '1' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Deck Details</h3>
          
          {!selectedDeckId && (
            <div style={{ 
              backgroundColor: '#f0f0f0', 
              padding: '8px', 
              borderRadius: '4px',
              color: '#666'
            }}>
              <p style={{ margin: '0' }}>Select a deck to view details</p>
            </div>
          )}
          
          {selectedDeckId && isLoadingDeckDetails && (
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '8px', 
              borderRadius: '4px'
            }}>
              <p style={{ margin: '0' }}>Loading deck details...</p>
            </div>
          )}
          
          {deckDetailsError && (
            <div style={{ 
              backgroundColor: '#ffebee', 
              color: '#d32f2f', 
              padding: '8px', 
              borderRadius: '4px'
            }}>
              Error loading deck details: {deckDetailsError.message}
            </div>
          )}
          
          {/* API Response for deck details */}
          {selectedDeckId && deckDetails && (
            <div style={{ 
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '4px'
            }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>GET /decks/{selectedDeckId} Response:</h4>
              <pre style={{ 
                backgroundColor: '#eeeeee', 
                padding: '8px', 
                borderRadius: '4px',
                overflow: 'auto',
                maxHeight: '300px',
                margin: '0',
                fontSize: '12px'
              }}>
                {JSON.stringify(deckDetails, null, 2)}
              </pre>
            </div>
          )}
        </div>
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
  },
});

export default {
  title: 'API/RealDeckBrowser',
  component: DeckBrowserComponent,
  decorators: [
    (Story) => (
      <QueryClientProvider client={createQueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

// Simple story that makes real API calls
export const LiveAPITest = {}; 