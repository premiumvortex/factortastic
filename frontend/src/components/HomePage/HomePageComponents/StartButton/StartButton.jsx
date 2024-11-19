import React from 'react';
import PropTypes from 'prop-types';
import { useSound } from '../../../Sound/SoundContext.jsx';

import StartButtonImage from '../../../../assets/artwork/Individual_Assets/Start.png';

import './StartButton.css';

/*
 * StartButton Component: displays start button in home page
 *
 * Props:
 * - handleClick (function): shows Agreement component
 * - soundEffect (string): the name of the sound effect to play when the button is clicked
 */

export const StartButton = ({ handleClick, soundEffect='click' }) => {
    const { playSoundEffect } = useSound();

    const handleClickWithSound = (e) => {
        if (soundEffect) {
            playSoundEffect(soundEffect);
        }
        handleClick(e);
    };

    return (
        <img
            className="start-button"
            title="Start"
            src={StartButtonImage}
            onClick={handleClickWithSound}
            alt="Start Button"
        />
    );
};

StartButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    soundEffect: PropTypes.string,
};
