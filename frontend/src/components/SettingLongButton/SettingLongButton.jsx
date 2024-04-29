import React from 'react';

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