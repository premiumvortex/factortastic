import React, { useState } from 'react';
import './Agreement.css';
import { PrivacyPolicyPage } from '../PrivacyPolicyPage/PrivacyPolicyPage';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Agreement = ({ onClose }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [showPrivacyPage, setShowPrivacyPage] = useState(false)

    const handleClick = () => {
        setShowPrivacyPage(true);
    };

    const handleClosePrivacyPage = () => {
        setShowPrivacyPage(false);
    };

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
        <div className="agreement-container">
            <div className="privacy-popup">
                <label>
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        color="success"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: '48px' }}} 
                    />
                    <span className="privacy-popup-text">I have read and agree to the terms and conditions</span>
                </label>
                <p className="privacy-policy-link" onClick={handleClick}>Privacy Policy</p>
    
            
                <button className="agree-button" onClick={handleClose}>Agree</button>
            </div>
            <div className="privacy-page-container">
                {showPrivacyPage && <PrivacyPolicyPage onClose={handleClosePrivacyPage}/>}
            </div>    
        </div>
    );
}


