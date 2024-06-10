import React from 'react';
import PropTypes from 'prop-types';

import { MyLockIcon } from '../LockIcon/LockIcon';

import './DeckButton.css';
import '../../../../index.css';

export const DeckButton = ({deck, onClick}) => {
    const { name, status, color } = deck;
    
    const isDisabled = status === 'disabled';
    const isLocked = status === 'locked';
    const gradient = name === 'gamut';

    // Only call onClick() if button is enabled
    const handleClick = () => {
        if (!isDisabled) {
            onClick();
        }
    };

    return (
        <button 
            className={`deck-button ${gradient ? 'gradient' : 'solid'}`} 
            aria-disabled={isDisabled} 
            onClick={handleClick} 
            style={{'--color': color }}
        >
            {isLocked && <MyLockIcon color={color} gradient={gradient} /> }
            {isDisabled && <p className="secondary">{name}</p>}
        </button>
    );
};

DeckButton.propTypes = {
    deck: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};