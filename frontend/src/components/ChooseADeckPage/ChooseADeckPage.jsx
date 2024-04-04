import React, { useState } from 'react';
import { DeckButton } from '../DeckButton/DeckButton';
import './ChooseADeckPage.css';

export const ChooseADeckPage = () => {
    const [decks, setDecks] = useState([
        { name: 'red', unlocked: 'unlocked', color: '#B62F32' },
        { name: 'purple', unlocked: 'unlocked', color: '#4E41BC'},
        { name: 'Deck 3', unlocked: 'locked', color: '#81B850' },
        { name: 'Deck 4', unlocked: 'locked', color: '#96FCFD' },
        { name: 'Deck 5', unlocked: 'locked', color: '#BF6C2F' },
        { name: 'Deck 6', unlocked: 'locked', color: '#E9CC47' },
        { name: 'coming soon', unlocked: 'disabled', color: '#C2C2C2'},
        { name: 'coming soon', unlocked: 'disabled', color: '#C2C2C2' },
    ]);

    const handleDeckClick = (index) => {
        const updatedDecks = [...decks];
        if (updatedDecks[index].unlocked !== 'disabled') {
            updatedDecks[index].unlocked = updatedDecks[index].unlocked === 'locked' ? 'unlocked' : 'locked';
            setDecks(updatedDecks);
        }
    };

    return (
        <div className="choose-deck-page">
            <h1>Choose a Deck</h1>
            <div className="deck-container">
                {decks.map((deck, index) => (
                    <DeckButton
                        key={index}
                        deckName={deck.name}
                        unlocked={deck.unlocked}
                        color={deck.color}
                        onClick={() => handleDeckClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}
