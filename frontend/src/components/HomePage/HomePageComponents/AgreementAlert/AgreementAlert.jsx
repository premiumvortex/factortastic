import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import './AgreementAlert.css';

/*
 * AgreementAlert Component: displays an error alert with a close button
 * Currently only notifies user that they neeed to read privacy policy 
 * 
 * Props:
 * - closeAlert (function): closes the alert
 * - message (string) : message to display in alert 
 */

export const AgreementAlert = ({ closeAlert, message }) => {
    return (
        <div className="alert-container">
            <Alert
                className="agreement-alert"
                severity="error"

                action={
                    <IconButton onClick={closeAlert} >
                        <CloseIcon />
                    </IconButton>
                }
            >
                <p className="settings-text">{message}</p>
            </Alert>
        </div>
    );
};

AgreementAlert.propTypes = {
    closeAlert: PropTypes.func.isRequired,             
    message: PropTypes.string.isRequired,
};