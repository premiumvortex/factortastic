import React from 'react';
import PropTypes from 'prop-types';

import { LockIcon } from '../LockIcon/LockIcon';

import './DeckButton.css';

/*
 * DeckButton Component: renders the individual deck button
 * 
 * Props:
 * - deck (object): holds deck info (name, status, and color)
 * - onClick (function): called when user clicks on the button
 */

export const DeckButton = ({ deck, onClick }) => {
    // Destructure deck and create state variables
    const { name, status, color } = deck;
    
    const isDisabled = status === 'disabled';
    const isLocked = status === 'locked';
    const gradient = color === 'var(--gradient)';

    // Define button styles
    const buttonStyle = {
        '--width': '13vw',                  // used to calculate inset and border radius         
        background: color,
        boxShadow: gradient ? '0px 8px 25px 0px var(--gray)' : `0px 8px 25px 0px ${color}`,
        pointerEvents: isDisabled ? 'none' : 'auto',
        // opacity: isDisabled ? 0.5 : 1,
    };

    return (
        <button 
            className="deck-button"
            aria-disabled={isDisabled} 
            onClick={onClick} 
            style={buttonStyle}
        >
            { isLocked && <LockIcon data-testid="lock-icon" color={color} /> }
            { isDisabled && <p className="deck-name secondary">{name}</p> }
        </button>
    );
};

DeckButton.propTypes = {
    deck: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};