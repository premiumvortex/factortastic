import { useQuery } from '@tanstack/react-query';
import { deckApi } from '../api/apiClient';

export const useDecks = (options = {}) => {
  return useQuery({
    queryKey: ['decks'],
    queryFn: deckApi.listDecks,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
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
    enabled: Boolean(deckId), // Only fetch when deckId is provided
    staleTime: 5 * 60 * 1000,
    retry: 2,
    onError: (error) => {
      console.error('Error fetching deck:', error);
      options.onError?.(error);
    },
  });
}; 