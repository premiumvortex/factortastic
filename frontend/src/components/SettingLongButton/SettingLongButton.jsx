import React from 'react';
import PropTypes from 'prop-types';

import './SettingLongButton.css';
import '../../index.css'


export const SettingLongButton = ({ isChecked, onClick }) => {
    return (
        <button
            className='agree-button'
            onClick={onClick}
            disabled={!isChecked}
        >
            Agree
        </button>
    );
};

SettingLongButton.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};