import React from 'react';
import PropTypes from 'prop-types';
import Lock from './Lock.svg'; 
import './DeckButton.css';

// DeckButton component takes in deck button arguments and displays the button
export const DeckButton = ({ deckName, status, color, onClick }) => {
    // Adjust styling based on color and status
    const buttonStyle = {
        backgroundColor: color,
        color: color,
        pointerEvents: status === 'disabled' ? 'none' : 'auto'
        // opacity: unlocked === 'disabled' ? 0.5 : 1, // Optionally, make disabled buttons appear faded
    };

    // Determine content: Show deckName for 'unlocked' and 'disabled', lock icon for 'locked'
    const buttonContent = status === 'locked' ? <img className="lock-icon" src={Lock} alt="Locked Icon"/> : deckName;

    // Adjust onClick: Only invoke onClick if not 'disabled'
    const handleClick = () => {
        if (status !== 'disabled') {
            onClick();
        }
    };

    return (
        <button 
            className="deck-button" 
            aria-disabled={status === 'disabled'} 
            onClick={handleClick} 
            style={buttonStyle}>
                <p className="button-name">{buttonContent}</p>
        </button>
    );
};

DeckButton.propTypes = {
    deckName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};