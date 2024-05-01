import React, { useState } from 'react';
import { DeckButton } from '../DeckButton/DeckButton';
import Grid from '@mui/material/Unstable_Grid2';

import '../../index.css';
import './ChooseADeckPage.css';

// ChooseADeck component stores the decks array and shows the different deck buttons
// It uses an array that has variable called status.
// Status has 3 states:
// unlocked, locked, disabled
export const ChooseADeckPage = () => {
    const [decks, setDecks] = useState([
        { name: 'red', status: 'unlocked', color: '#B62F32' },
        { name: 'purple', status: 'unlocked', color: '#4E41BC'},
        { name: 'green', status: 'locked', color: '#81B850' },
        { name: 'blue', status: 'locked', color: '#96FCFD' },
        { name: 'orange', status: 'locked', color: '#BF6C2F' },
        { name: 'yellow', status: 'locked', color: '#E9CC47' },
        { name: 'coming soon', status: 'disabled', color: '#C2C2C2'},
        { name: 'coming soon', status: 'disabled', color: '#C2C2C2' },
    ]);

    // toggle unlocked and locked status (currently on click for testing)
    const handleDeckClick = (index) => {
        const updatedDecks = [...decks];

        if (updatedDecks[index].status !== 'disabled') {
            updatedDecks[index].status = updatedDecks[index].status === 'locked' ? 'unlocked' : 'locked';
            setDecks(updatedDecks);
        }
    };

    return (
        <div className="choose-deck-page">
            <div className="choose-deck-title">
                <h1 className="page-title">Choose a Deck</h1>
            </div>
            
            <div className="grid">
                <Grid container spacing={{ xs: 6, md: 9, lg: 12 }}>
                    {decks.map((deck, index) => (
                        <Grid item key={index} xs={3} className="grid-item">
                            <DeckButton
                                deckName={deck.name}
                                status={deck.status}
                                color={deck.color}
                                onClick={() => handleDeckClick(index)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>    
        </div>
    );
}
