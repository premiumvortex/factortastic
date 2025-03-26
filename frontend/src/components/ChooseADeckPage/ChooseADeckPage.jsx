import React from 'react';
import { DeckPageContent } from './ChooseADeckComponents/DeckPageContent/DeckPageContent';
import { useGame } from '../../hooks/useGame';

import '../../index.css';
import './ChooseADeckPage.css';

export const ChooseADeckPage = () => {
    // Assuming we have a current game ID stored somewhere (localStorage, context, etc.)
    const gameId = localStorage.getItem('currentGameId') || null;
    const { data: gameSession, isLoading, error } = useGame(gameId);

    return (
        <div className="choose-deck-page">
            {isLoading ? (
                <div className="loading-state">Loading game session...</div>
            ) : error ? (
                <div className="error-state">Error loading game session: {error.message}</div>
            ) : (
                <DeckPageContent gameSession={gameSession} />
            )}
        </div>
    );
}
