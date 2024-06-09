import React from 'react';
import PropTypes from 'prop-types';
import LockIcon from '@mui/icons-material/Lock'; 

import './DeckButton.css';
import '../../../../index.css';

export const DeckButton = ({ status, color, onClick }) => {

    
    // Only call onClick() if button is enabled
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
            style={{'--color': color }}
        >
            {status === 'locked' && <LockIcon sx={{ color: color, fontSize: '7vw' }} />}
            {status === 'disabled' && <p className="secondary">Coming Soon</p>}
        </button>
    );
};

DeckButton.propTypes = {
    status: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};