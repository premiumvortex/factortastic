import React from 'react';
import PropTypes from 'prop-types';

import './SettingLongButton.css';
import '../../index.css'

export const SettingLongButton = ({ message, isDisabled, onClick }) => {
    return (
        <button
            className='agree-button'
            onClick={onClick}
            disabled={isDisabled}
        >
            <p className='secondary'>{message}</p>
        </button>
    );
};

SettingLongButton.propTypes = {
    message: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};