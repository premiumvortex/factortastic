import React from 'react';
import PropTypes from 'prop-types';
import { useSound } from '../Sound/SoundContext.jsx';

import './SettingLongButton.css';
import '../../index.css'

/*
 * SettingLongButton Component
 *
 * Props:
 * - text (string): displayed on button
 * - isDisabled (bool): indicates if user can click on button
 * - onClick (function): called when user clicks on button
 * - soundEffect (string): the name of the sound effect to play when the button is clicked
 */
export const SettingLongButton = ({ text, isDisabled, onClick, soundEffect }) => {
    const { playSoundEffect } = useSound() || {}; // added '|| {}' to accept undefined.

    const handleClick = (e) => {
        if (soundEffect) {
            playSoundEffect(soundEffect);
        }
        onClick(e);
    };

    return (
        <button
            className='agree-button'
            onClick={handleClick}
            disabled={isDisabled}
        >
            <p className='button-text secondary'>{text}</p>
        </button>
    );
};

SettingLongButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    soundEffect: PropTypes.string,
};

SettingLongButton.defaultProps = {
    soundEffect: '',
};
