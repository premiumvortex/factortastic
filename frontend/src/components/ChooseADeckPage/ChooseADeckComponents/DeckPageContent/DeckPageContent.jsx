import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { DeckButton } from '../DeckButton/DeckButton.jsx';

import './DeckPageContent.css';
import '../../../../index.css';

// DeckPageContent Component: displays the different decks a user can choose
// Props: none

export const DeckPageContent = () => {
    const [decks, setDecks] = useState([
        { name: 'red', status: 'unlocked', color: 'var(--red)' },
        { name: 'blue', status: 'locked', color: 'var(--blue)'},
        { name: 'green', status: 'locked', color: 'var(--green)' },
        { name: 'aqua', status: 'locked', color: 'var(--aqua)' },
        { name: 'orange', status: 'locked', color: 'var(--orange)' },
        { name: 'yellow', status: 'locked', color: 'var(--yellow)' },
        { name: 'gamut', status: 'locked', color: 'var(--gradient)'},
        { name: 'coming soon', status: 'disabled', color: 'var(--gray)' }
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
                    {decks.map((deck, index) => (
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


