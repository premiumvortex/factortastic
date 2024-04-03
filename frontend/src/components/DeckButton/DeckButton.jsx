// DeckButton.jsx
import React from 'react';
import './DeckButton.css'; // Import the CSS file for styling
import Lock from './Lock.svg'

export const DeckButton = ( { deckName, unlocked, onClick, color } ) => {
    const unlockDeck = () => {
        if (!unlocked) {
          onClick(); 
        }
    };
    
    const buttonStyle = {
        backgroundColor: color,
        // boxShadow: `0 8px 12px rgba(${color}, 0.3)`,
        pointerEvents: unlocked ? 'auto' : 'none' 
    };
    
    return (
        <button className="deck-button" style={buttonStyle} onClick={unlockDeck}>
            {/* {unlocked ? (
                deckName
            ) : (
                <img src={Lock} alt="Icon" />
            )} */}
            {deckName}
        </button>
    );
}

