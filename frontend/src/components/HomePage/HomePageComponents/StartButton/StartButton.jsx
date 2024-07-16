import React from 'react';
import PropTypes from 'prop-types';

import StartButtonImage from '../../../../assets/artwork/Individual_Assets/Start.png';

import './StartButton.css';

/*
 * StartButton Component: displays start button in home page
 * 
 * Props: 
 * - handleClick (function): shows Agreement component
 */

export const StartButton = ({ handleClick }) => {
    return (
        <img 
            className="start-button" 
            title="Start"
            src={StartButtonImage}
            onClick={handleClick} 
        />
    );
};

StartButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};
