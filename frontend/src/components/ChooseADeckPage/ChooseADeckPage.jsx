import React, { useState } from 'react';
import { DeckButton } from '../DeckButton/DeckButton';
import './ChooseADeckPage.css';

// ChooseADeck uses an array that has variable called status.
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

    // toggle unlocked and locked status
    const handleDeckClick = (index) => {
        const updatedDecks = [...decks];
        if (updatedDecks[index].status !== 'disabled') {
            updatedDecks[index].status = updatedDecks[index].status === 'locked' ? 'unlocked' : 'locked';
            setDecks(updatedDecks);
        }
    };

    return (
        <div className="choose-deck-page">
            <h1 className="deck-page-heading">Choose a Deck</h1>
            <div className="decks-container">
                {decks.map((deck, index) => (
                    <DeckButton
                        key={index}
                        deckName={deck.name}
                        status={deck.status}
                        color={deck.color}
                        onClick={() => handleDeckClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}