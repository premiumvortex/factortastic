import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useDecks } from '../../../../hooks/useDeck';
import { DeckButton } from '../DeckButton/DeckButton.jsx';

import './DeckPageContent.css';
import '../../../../index.css';

// DeckPageContent Component: displays the different decks a user can choose
// Props: 
// - gameSession: object containing information about the current game session, including unlocked decks

export const DeckPageContent = ({ gameSession }) => {
    const [processedDecks, setProcessedDecks] = useState([]);
    const numberOfDecks = 8; // Total number of deck slots to display
    
    // Fetch decks from API
    const { data: apiDecks, isLoading, error } = useDecks();
    
    useEffect(() => {
        if (apiDecks) {
            // Get the list of unlocked deck IDs from the game session
            const unlockedDeckIds = gameSession?.unlockedDecks || ['red']; // Default to red if no session
            
            // Process decks from API and assign status
            // Check if apiDecks is an array or if it has a decks property that is an array
            const decksArray = Array.isArray(apiDecks) 
                ? apiDecks 
                : (apiDecks.decks && Array.isArray(apiDecks.decks) 
                    ? apiDecks.decks.map(deckId => ({ deckId })) 
                    : []);
            
            const mappedDecks = decksArray.map(deck => {
                const deckId = typeof deck === 'string' ? deck : deck.deckId;
                const isUnlocked = unlockedDeckIds.includes(deckId);
                return {
                    name: deckId,
                    status: isUnlocked ? 'unlocked' : 'locked',
                    color: `var(--${deckId})`, // Assuming CSS variables match deck IDs
                    deckId: deckId
                };
            });
            
            // Fill remaining slots with disabled decks if needed
            let finalDecks = [...mappedDecks];
            if (finalDecks.length < numberOfDecks) {
                const remainingSlots = numberOfDecks - finalDecks.length;
                for (let i = 0; i < remainingSlots; i++) {
                    finalDecks.push({
                        name: 'coming soon',
                        status: 'disabled',
                        color: 'var(--gray)'
                    });
                }
            }
            
            setProcessedDecks(finalDecks);
        }
    }, [apiDecks, gameSession]);

    // toggle unlocked and locked status 
    const handleDeckClick = (index) => {
        const updatedDecks = [...processedDecks];

        if (updatedDecks[index].status !== 'disabled') {
            updatedDecks[index].status = updatedDecks[index].status === 'locked' ? 'unlocked' : 'locked';
            setProcessedDecks(updatedDecks);
        }
    };

    // Handle loading and error states
    if (isLoading) return <div className="loading-state">Loading decks...</div>;
    if (error) return <div className="error-state">Error loading decks: {error.message}</div>;

    return (
        <div>
            <h1 className="page-title" style={{color: 'var(--cyan)'}}>Choose a Deck</h1>
            
            <div className="buttons-grid">
                <Grid container spacing={{ xs: 3, md: 6, lg: 10 }}>
                    {processedDecks.map((deck, index) => (
                        <Grid item key={index} xs={3} className="grid-item">
                            <DeckButton
                                deck={deck}
                                onClick={() => handleDeckClick(index)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>    
        </div>
    );
}


