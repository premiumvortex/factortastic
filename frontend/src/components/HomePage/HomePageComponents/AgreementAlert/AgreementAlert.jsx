import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import '../../../../index.css';
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
                role="alertdialog"
                aria-labelledby="alert-dialog-title"

                action={
                    <IconButton
                        aria-label="close agreement alert"
                        aria-labelledby="close-alert-label"
                        onClick={onClose}
                    >
                        <CloseIcon sx={{ fontSize: 30 }}/>
                    </IconButton>
                }
            >
                {/* Hidden divs for accessibility labels */}
                <div id="alert-dialog-title" style={{ display: 'none' }}>Agreement Alert</div>
                <div id="close-alert-label" style={{ display: 'none' }}>Close Agreement Alert</div>

                <p className="settings-text">{message}</p>
            </Alert>
        </div>
    );
};

AgreementAlert.propTypes = {
    onClose: PropTypes.func.isRequired,             
    message: PropTypes.string.isRequired,
};