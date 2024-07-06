import React from 'react';
import PropTypes from 'prop-types';

import './SettingLongButton.css';
import '../../index.css'

/*
 * SettingLongButton Component
 * 
 * Props: 
 * - message (string): displayed on button
 * - isDisabled (bool): indicated if user can click on button
 * - onClick (function): called when user clicks on button
 */

export const SettingLongButton = ({ text, isDisabled, onClick }) => {
    return (
        <button
            className='agree-button'
            onClick={onClick}
            disabled={isDisabled}
        >
            <p className='secondary'>{text}</p>
        </button>
    );
};

SettingLongButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};