import React, { useState } from 'react';
import './Agreement.css';
import { PrivacyPolicyPage } from '../PrivacyPolicyPage/PrivacyPolicyPage';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Agreement = ({ onClose }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClose = () => {
        if (isChecked) {
            onClose();
        } 
        else {
            alert('Please accept the terms before closing.');
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="privacy-popup">
            <label>
                {/* <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> */}
                
                <Checkbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    color="success"
                    sx={{
                        '& .MuiSvgIcon-root': { fontSize: '32px' }, 
                        
                    }} 
                />
                <span className="privacy-popup-text">I have read and agree to the terms and conditions</span>
            </label>
            <button onClick={handleClose}>Agree</button>
        </div>
    );
}


