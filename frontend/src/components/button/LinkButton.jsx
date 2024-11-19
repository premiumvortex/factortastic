import React from 'react';
import PropTypes from 'prop-types';
import { useSound } from '../Sound/SoundContext.jsx';

const LinkButton = ({ onClick, text, soundEffect='click', ariaLabel }) => {
    const { playSoundEffect } = useSound();

    const handleClick = (e) => {
        if (soundEffect) {
            playSoundEffect(soundEffect); // Play the specified sound effect if provided
        }
        onClick(e); // Execute the provided onClick function
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            style={{
                background: 'none',
                color: 'blue',
                border: 'none',
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                textDecoration: 'underline',
            }}
            aria-label={ariaLabel}
        >
            {text}
        </button>
    );
};

LinkButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    soundEffect: PropTypes.string, // Optional sound effect prop
    ariaLabel: PropTypes.string, // Optional accessibility label
};

LinkButton.defaultProps = {
    ariaLabel: '', // Default to no aria label if not provided
};

export default LinkButton;
