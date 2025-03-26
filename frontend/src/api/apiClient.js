import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Using Vite env variable
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // For Storybook/MSW compatibility - ensure baseURL is included in the full URL
    // This helps MSW properly intercept the requests
    if (import.meta.env.MODE === 'development' && config.baseURL) {
      const url = new URL(config.url || '', config.baseURL);
      config.url = url.toString();
      // Remove baseURL to prevent it being prepended again
      config.baseURL = '';
    }
    
    // You could add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle specific error cases
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 404:
          error.message = 'Resource not found';
          break;
        case 500:
          error.message = 'Internal server error';
          break;
        default:
          error.message = error.response.data?.message || 'An error occurred';
      }
    } else if (error.request) {
      // Request made but no response received
      error.message = 'No response from server';
    }
    
    return Promise.reject(error);
  }
);

// API endpoints
export const gameApi = {
  createGame: (gameData) => apiClient.post('/games', gameData),
  getGame: (gameId) => apiClient.get(`/games/${gameId}`),
  // Add more game-related endpoints as needed
};

export const deckApi = {
  listDecks: () => apiClient.get('/decks'),
  getDeck: (deckId) => apiClient.get(`/decks/${deckId}`),
};

export default apiClient; 