import { useQuery } from '@tanstack/react-query';
import { deckApi } from '../api/apiClient';

export const useDecks = (options = {}) => {
  return useQuery({
    queryKey: ['decks'],
    queryFn: async () => {
      const decksData = await deckApi.listDecks();
      console.log('Raw decks data from API:', decksData);
      
      // If we just get an array of deck IDs
      if (decksData.decks && Array.isArray(decksData.decks) && typeof decksData.decks[0] === 'string') {
        const deckPromises = decksData.decks.map(deckId => deckApi.getDeck(deckId));
        const fullDecks = await Promise.all(deckPromises);
        console.log('Full decks data:', fullDecks);
        
        // Extract the actual deck objects from the nested structure
        const processedDecks = fullDecks.map(deck => {
          // Handle the nested structure where deck info is in deck.cards[0]
          if (deck.cards && Array.isArray(deck.cards) && deck.cards[0]) {
            return deck.cards[0];
          }
          return deck;
        });
        
        // Sort by deckOrder
        return processedDecks.sort((a, b) => a.deckOrder - b.deckOrder);
      }
      
      // If we already have an array of deck objects
      if (Array.isArray(decksData)) {
        // Extract the actual deck objects from the nested structure
        const processedDecks = decksData.map(deck => {
          // Handle the nested structure where deck info is in deck.cards[0]
          if (deck.cards && Array.isArray(deck.cards) && deck.cards[0]) {
            return deck.cards[0];
          }
          return deck;
        });
        
        return processedDecks.sort((a, b) => a.deckOrder - b.deckOrder);
      }
      
      return decksData;
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    retry: 2,
    onError: (error) => {
      console.error('Error fetching decks:', error);
      options.onError?.(error);
    },
  });
};

export const useDeck = (deckId, options = {}) => {
  return useQuery({
    queryKey: ['deck', deckId],
    queryFn: () => deckApi.getDeck(deckId),
    enabled: Boolean(deckId),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    onError: (error) => {
      console.error('Error fetching deck:', error);
      options.onError?.(error);
    },
  });
}; 