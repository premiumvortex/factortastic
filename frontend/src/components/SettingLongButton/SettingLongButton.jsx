import React from 'react';
import PropTypes from 'prop-types';

import './SettingLongButton.css';
import '../../index.css'


export const SettingLongButton = ({ isDisabled, onClick }) => {
    return (
        <button
            className='agree-button'
            onClick={onClick}
            disabled={isDisabled}
        >
            <p className='secondary'>Agree</p>
        </button>
    );
};

SettingLongButton.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};