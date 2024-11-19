import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkButton from "../../../button/LinkButton.jsx";

import { AgreementAlert } from '../AgreementAlert/AgreementAlert';
import { AgreementCheckbox } from '../AgreementCheckbox/AgreementCheckbox';
import { PrivacyPolicyPage } from '../../../PrivacyPolicyPage/PrivacyPolicyPage';
import { SettingLongButton } from '../../../SettingLongButton/SettingLongButton';

import './Agreement.css';

/*
 * Agreement Component: shows the agreement pop up, which forces users to agree to terms and conditions before continuing,
 * It controls the checkbox, PrivacyPolicyPage visibility, and AgreementAlert visibility
 * 
 * Props:
 * - onClose (function): closes the agreement pop up, called when user presses agree button
 */

export const Agreement = ({ closeAgreement }) => {
    // state variables
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [showPrivacyPage, setShowPrivacyPage] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const alertMessage = "Please read the privacy policy before agreeing to the terms and conditions";

    // only toggle checkbox if user read privacy policy
    const toggleCheckbox = () => {
        if (isDisabled) {
            setShowAlert(true);
        } else {
            setIsChecked(!isChecked);
        }
    };

    // shows PrivacyPolicyPage and enables checkbox
    const openPrivacyPolicy = (e) => {
        e.preventDefault();  // Prevent the default link behavior
        setShowPrivacyPage(true);
        setIsDisabled(false);
    };

    // functions to close the popups
    const closePrivacyPolicy = () => { setShowPrivacyPage(false); }
    const closeAlert = () => { setShowAlert(false); }

    return (
        <div className={`agreement-page ${showAlert ? 'background-hidden' : ''}`}>
            <div className="agreement-popup">
                <div className="acknowledgement">
                    <AgreementCheckbox id="acknowledgement-checkbox" checked={isChecked} onChange={toggleCheckbox}/>
                    <p className="settings-text">
                        I have read and agree with the
                        <LinkButton
                            onClick={openPrivacyPolicy}
                            text="terms and conditions"
                            ariaLabel="Read the terms and conditions"
                        />
                    </p>
                </div>

                <SettingLongButton text="Agree" isDisabled={!isChecked} onClick={closeAgreement} soundEffect={'click'}/>
            </div>

            {showAlert && <AgreementAlert closeAlert={closeAlert} message={alertMessage}/>}
            {showPrivacyPage && <PrivacyPolicyPage closePrivacyPolicy={closePrivacyPolicy}/>}
        </div>
    );
};

Agreement.propTypes = {
    closeAgreement: PropTypes.func.isRequired
};
