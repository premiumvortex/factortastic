import React, { useState } from 'react';

import { PrivacyPolicyPage } from '../PrivacyPolicyPage/PrivacyPolicyPage';
import { AgreementAlert } from '../AgreementAlert/AgreementAlert';
import { SettingLongButton } from '../SettingLongButton/SettingLongButton';

import Checkbox from '@mui/material/Checkbox';

import '../../index.css';
import './Agreement.css';

export const Agreement = ({ onClose }) => {
    const [isChecked, setIsChecked] = useState(false);                  // checked state of checkbox
    const [isDisabled, setIsDisabled] = useState(true);                 // disabled state of checkbox 
    const [showPrivacyPage, setShowPrivacyPage] = useState(false);      // state of privacy policy 
    const [showAlert, setShowAlert] = useState(false);                  // show alert when user clicks checkbox without reading privacy policy 

    const message = "Please read the privacy policy before agreeing to the terms and conditions";

    // toggle checkbox unless user has not yet opened privacy policy
    const toggleCheckbox = () => {
        if (isDisabled) {
            setShowAlert(true); 
        } else {
            setIsChecked(!isChecked);
        }
    };

    // shows Privacy Policy Page and enables checkbox
    const handlePrivacyPolicyClick = () => {
        setShowPrivacyPage(true);
        setIsDisabled(false)
    };

    // functions to close the popups
    const handlePrivacyPolicyClose = () => { setShowPrivacyPage(false); }
    const handleCloseAlert = () => { setShowAlert(false); }
    const handleAgreementClose = () => { onClose(); }

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

                <p><span className="privacy-policy-link" onClick={handlePrivacyPolicyClick}>privacy policy</span></p>
            
                <SettingLongButton isChecked={isChecked} onClick={handleAgreementClose} />
            </div>

            { showPrivacyPage && <PrivacyPolicyPage onClose={handlePrivacyPolicyClose} /> }
            { showAlert && <AgreementAlert onClose={handleCloseAlert} message={message} /> }
        </div>
    );
};
