import { useMutation, useQuery } from '@tanstack/react-query';
import { gameApi } from '../api/apiClient';

export const useGame = (gameId) => {
  return useQuery({
    queryKey: ['game', gameId],
    queryFn: () => gameApi.getGame(gameId),
    enabled: Boolean(gameId),
    // Games might change more frequently, so use shorter staleTime
    staleTime: 1000 * 30, // 30 seconds
    retry: 2, // Retry failed requests twice
    onError: (error) => {
      console.error('Error fetching game:', error);
      // You could add toast notifications or other error handling here
    },
  });
};

export const useCreateGame = (options = {}) => {
  return useMutation({
    mutationFn: gameApi.createGame,
    onError: (error) => {
      console.error('Error creating game:', error);
      options.onError?.(error);
    },
    onSuccess: (data, variables, context) => {
      options.onSuccess?.(data);
    },
  });
}; 