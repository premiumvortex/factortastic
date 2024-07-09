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
 * - onClose (function): closes the alert
 * - message (string) : message to display in alert 
 */

export const AgreementAlert = ({ onClose, message }) => {
    return (
        <div className="alert-container">
            <Alert
                className="agreement-alert"
                severity="error"

                action={
                    <IconButton aria-label="close error message" onClick={onClose} >
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
    onClose: PropTypes.func.isRequired,             
    message: PropTypes.string.isRequired,
};