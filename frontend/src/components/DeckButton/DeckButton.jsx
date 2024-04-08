import React from 'react';
import './DeckButton.css';
import Lock from './Lock.svg'; // Keep this import if you're using the icon elsewhere

export const DeckButton = ({ deckName, status, onClick, color }) => {
    // Adjust styling based on state
    const buttonStyle = {
        backgroundColor: color,
        pointerEvents: status === 'disabled' ? 'none' : 'auto',
        // opacity: unlocked === 'disabled' ? 0.5 : 1, // Optionally, make disabled buttons appear faded
    };

    // Determine content: Show deckName for 'unlocked' and 'disabled', lock icon for 'locked'
    const buttonContent = status === 'locked' ? <img src={Lock} alt="Locked Icon"/> : deckName;

    // Adjust onClick: Only invoke onClick if not 'disabled'
    const handleClick = () => {
        if (status !== 'disabled') {
            onClick();
        }
    };

    return (
        <button className="deck-button" onClick={handleClick} style={buttonStyle}>
            {buttonContent}
        </button>
    );
};
