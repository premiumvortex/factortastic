import React, { useState } from 'react';
import { PrivacyPolicyPage } from '../PrivacyPolicyPage/PrivacyPolicyPage';
import { AgreementAlert } from '../AgreementAlert/AgreementAlert';

import Checkbox from '@mui/material/Checkbox';

import '../../index.css';
import './Agreement.css';

export const Agreement = ({ onClose }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [showPrivacyPage, setShowPrivacyPage] = useState(false);
    const [showCheckboxAlert, setShowCheckboxAlert] = useState(false); 
    const [showPrivacyAlert, setShowPrivacyAlert] = useState(false); 

    const handleClick = () => {
        setShowPrivacyPage(true);
        setIsDisabled(false)
    };

    const toggleCheckbox = () => {
        if (isDisabled) {
            setShowPrivacyAlert(true); 
        } else {
            setIsChecked(!isChecked);
        }
    };

    const handleClose = () => {
        if (isChecked) {
            onClose();
        } else {
            setShowCheckboxAlert(true); 
        }
    };

    return (
        <div className="agreement-container">
            <div className="agreement-popup">
                <div>
                    <Checkbox
                        checked={isChecked}
                        onChange={toggleCheckbox}
                        color="success"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: '48px' }}} 
                    />
                    <span className="agreement-popup-text">I have read and agreed to the terms and conditions</span>
                </div>

                <p>
                    <span className="privacy-policy-link" onClick={handleClick}>privacy policy</span>
                </p>
            
                <button className="agree-button" onClick={handleClose}>Agree</button>
            </div>

            {showPrivacyPage && <PrivacyPolicyPage onClose={() => {setShowPrivacyPage(false)}}/>}

            {showPrivacyAlert && 
                <AgreementAlert 
                    onClose={ () => {setShowPrivacyAlert(false)}} 
                    message="Please read the privacy policy before agreeing to the terms and conditions"  
                /> }

            {showCheckboxAlert && 
                <AgreementAlert 
                    onClose={ () => {setShowCheckboxAlert(false)}} 
                    message="Please accept the terms before closing"
                /> }
        </div>
    );
};
