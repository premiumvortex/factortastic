import React from 'react';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import '../../index.css';
import './AgreementAlert.css';

export const AgreementAlert = ({ onClose, message }) => {
    return (
        <div className="alert-container">
            <Alert 
                className="agreement-alert"
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                    >
                        <CloseIcon  />
                    </IconButton>
                }
                sx={{ fontSize: '2vw' }}
            >
                {message}
            </Alert>
        </div>
    );
};
