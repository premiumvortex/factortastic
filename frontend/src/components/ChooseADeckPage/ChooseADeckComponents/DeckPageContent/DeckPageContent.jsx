import React, { useState } from 'react';

import { DeckButton } from '../DeckButton/DeckButton.jsx';
import Grid from '@mui/material/Unstable_Grid2';

import './DeckPageContent.css';
import '../../../../index.css';

// DeckPageContent displays the different decks a user can choose
// Displays the DeckButtons
export const DeckPageContent = () => {
    const [decks, setDecks] = useState([
        { name: 'red', status: 'unlocked', color: '#B62F32' },
        { name: 'purple', status: 'locked', color: '#4E41BC'},
        { name: 'green', status: 'locked', color: '#81B850' },
        { name: 'blue', status: 'locked', color: '#96FCFD' },
        { name: 'orange', status: 'locked', color: '#BF6C2F' },
        { name: 'yellow', status: 'locked', color: '#E9CC47' },
        { name: 'gamut', status: 'locked', color: '#C2C2C2'},
        { name: 'coming soon', status: 'disabled', color: '#C2C2C2' },
    ]);

    // toggle unlocked and locked status 
    const handleDeckClick = (index) => {
        const updatedDecks = [...decks];

        if (updatedDecks[index].status !== 'disabled') {
            updatedDecks[index].status = updatedDecks[index].status === 'locked' ? 'unlocked' : 'locked';
            setDecks(updatedDecks);
        }
    };

    return (
        <div>
            <h1 className="page-title" style={{color: 'var(--cyan)'}}>Choose a Deck</h1>
            
            <div className="buttons-grid">
                <Grid container spacing={{ xs: 3, md: 6, lg: 10 }}>
                    {decks.map(({name, status, color}, index) => (
                        <Grid item key={index} xs={3} className="grid-item">
                            <DeckButton
                                deckName={name}
                                status={status}
                                color={color}
                                onClick={() => handleDeckClick(index)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>    
        </div>
    );
}


