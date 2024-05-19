import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';

import { AgreementAlert } from '../AgreementAlert/AgreementAlert.jsx';
import { AgreementCheckbox } from '../AgreementCheckbox/AgreementCheckbox.jsx';
import { PrivacyPolicyPage } from '../../../PrivacyPolicyPage/PrivacyPolicyPage.jsx';
import { SettingLongButton } from '../../../SettingLongButton/SettingLongButton.jsx';

import '../../../../index.css';
import './Agreement.css';

// Agreement component shows the agreement pop up, which forces users to agree to terms and conditions before continuing
// It controls the checkbox, PrivacyPolicyPage visibility, and alert visibility
export const Agreement = ({ onClose }) => {

    // state variables
    const [isChecked, setIsChecked] = useState(false);              
    const [isDisabled, setIsDisabled] = useState(true);                 
    const [showPrivacyPage, setShowPrivacyPage] = useState(false);      
    const [showAlert, setShowAlert] = useState(false);                

    const alertMessage = "Please read the privacy policy before agreeing to the terms and conditions";

    // toggle checkbox unless user has not opened privacy policy
    const toggleCheckbox = () => {
        if (isDisabled) {
            setShowAlert(true); 
        } else {
            setIsChecked(!isChecked);
        }
    };

    // shows PrivacyPolicyPage and enables checkbox
    const handlePrivacyPolicyClick = () => {
        setShowPrivacyPage(true);
        setIsDisabled(false)
    };

    // functions to close the popups
    const closePrivacyPolicy = () => { setShowPrivacyPage(false); }
    const closeAlert = () => { setShowAlert(false); }
    const closeAgreement = () => { onClose(); }

    return (
        <div className="agreement-container">
            <div className="agreement-popup">
                <div>
                    <Checkbox
                        id="agreementCheckbox"
                        checked={isChecked}
                        onChange={toggleCheckbox}
                
                        sx={{
                            color: 'black',
                            '&.Mui-checked': { color: 'var(--cyan)' },                        
                            '& .MuiSvgIcon-root': { fontSize: '48px' }
                        }}
                    />

                    <span className="settings-text">I have read and agreed to the terms and conditions</span>
                </div>

                <p className="privacy-policy-link settings-text" onClick={handlePrivacyPolicyClick}>privacy policy</p>
            
                <SettingLongButton message="Agree" isDisabled={!isChecked} onClick={closeAgreement} />
            </div>

            { showPrivacyPage && <PrivacyPolicyPage onClose={closePrivacyPolicy} /> }
            { showAlert && <AgreementAlert onClose={closeAlert} message={alertMessage} /> }
        </div>
    );
};

Agreement.propTypes = {
    onClose: PropTypes.func.isRequired
};

