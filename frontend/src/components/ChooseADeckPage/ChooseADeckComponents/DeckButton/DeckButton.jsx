import React from 'react';
import PropTypes from 'prop-types';

import { LockIcon } from '../LockIcon/LockIcon';
import { MUILockIcon } from '../LockIcon/MUILockIcon';


import './DeckButton.css';
import '../../../../index.css';

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
        '--width': '13vw',
        '--color': color,
        background: color,
        boxShadow: gradient ? '0px 8px 25px 0px var(--gray)' : '0px 8px 25px 0px var(--color)',
        pointerEvents: isDisabled ? 'none' : 'auto',
        // opacity: isDisabled ? 0.5 : 1,
    };

    // Only call onClick() if button is enabled
    const handleClick = () => {
        if (!isDisabled) {
            onClick();
        }
    };

    return (
        <button 
            className="deck-button"
            aria-disabled={isDisabled} 
            onClick={handleClick} 
            style={buttonStyle}
        >
            {isLocked && <LockIcon gradient={gradient} color={color} /> }     
            {/* {isLocked && <MUILockIcon gradient={gradient} color={color} /> }      */}
            {isDisabled && <p className="secondary">{name}</p>}
        </button>
    );
};

DeckButton.propTypes = {
    deck: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};