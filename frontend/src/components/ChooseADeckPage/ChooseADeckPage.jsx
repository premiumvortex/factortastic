// ChooseDeckPage.jsx
import React, { useState } from 'react';
import { DeckButton } from '../DeckButton/DeckButton'; // Import the DeckButton component
import './ChooseADeckPage.css'; // Import the CSS file for styling

export const ChooseADeckPage = () => {
 
    //list of decks
    const [decks, setDecks] = useState([
        { name: 'red', unlocked: true, color: '#B62F32' },
        { name: 'purple', unlocked: true, color: '#4E41BC'},
        { name: 'Deck 3', unlocked: false, color: '#81B850' },
        { name: 'Deck 4', unlocked: false, color: '#96FCFD' },
        { name: 'Deck 5', unlocked: false, color: '#BF6C2F' },
        { name: 'Deck 6', unlocked: false, color: '#E9CC47' },
        { name: 'coming soon', unlocked: true, color: '#C2C2C2'},
        { name: 'coming soon', unlocked: true, color: '#C2C2C2' },
    ]);

    //sets given deck unlocked to true
    const handleDeckClick = (index) => {
        // const updatedDecks = [...decks];
        // updatedDecks[index].unlocked = true;
        // setDecks(updatedDecks);
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
