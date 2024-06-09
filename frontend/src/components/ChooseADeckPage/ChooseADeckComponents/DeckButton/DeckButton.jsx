import React from 'react';
import PropTypes from 'prop-types';

import { MyLockIcon } from '../LockIcon/LockIcon';

import './DeckButton.css';
import '../../../../index.css';

// gradient border is covered by background image on the corners


export const DeckButton = ({ deckName, status, color, onClick }) => {
    const isDisabled = status === 'disabled';
    const isLocked = status === 'locked';
    const isGamut = deckName === 'gamut';

    // Only call onClick() if button is enabled
    const handleClick = () => {
        if (!isDisabled) {
            onClick();
        }
    };

    return (
        <button 
            className={`deck-button ${isGamut ? 'gamut' : 'solid'}`} 
            aria-disabled={isDisabled} 
            onClick={handleClick} 
            style={{'--color': color }}
        >
            {isLocked && <MyLockIcon color={color} gradient={isGamut} /> }
            {isDisabled && <p className="secondary">{deckName}</p>}
        </button>
    );
};

DeckButton.propTypes = {
    deckName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};