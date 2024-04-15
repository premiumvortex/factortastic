import React, { useState } from 'react'
import { PrivacyPolicyPage } from '../PrivacyPolicyPage/PrivacyPolicyPage';
import Checkbox from '@mui/material/Checkbox';
import './Agreement.css';

export const Agreement = ({ onClose }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [showPrivacyPage, setShowPrivacyPage] = useState(false)

    // called when user clicks on privacy policy link
    const handleClick = () => {
        setShowPrivacyPage(true);
        setIsDisabled(false)
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleClosePrivacyPage = () => {
        setShowPrivacyPage(false);
    };

    // closes agreement box when user presses "Agree" button
    const handleClose = () => {
        if (isChecked) {
            onClose();
        } 
        else {
            alert('Please accept the terms before closing.');
        }
    };

    return (
        <div className="agreement-container">
            <div className="privacy-popup">
                <div>
                    <Checkbox
                        checked={isChecked}
                        onChange={toggleCheckbox}
                        color="success"
                        disabled={isDisabled}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: '48px' }}} 
                    />
                    <span className="privacy-popup-text">I have read and agreed to the terms and conditions</span>
                </div>

                <p className="privacy-policy-link" onClick={handleClick}>privacy policy</p>
            
                <button className="agree-button" onClick={handleClose}>Agree</button>
            </div>

            <div className="privacy-page-container">
                {showPrivacyPage && <PrivacyPolicyPage onClose={handleClosePrivacyPage}/>}
            </div>    
        </div>
    );
}


