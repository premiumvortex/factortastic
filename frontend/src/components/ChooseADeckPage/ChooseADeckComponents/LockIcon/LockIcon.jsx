import React from 'react';
import PropTypes from 'prop-types';
import LockIcon from '@mui/icons-material/Lock'; 
import SvgIcon from '@mui/material/SvgIcon';

// displays the lock icon used in the DeckButton
// fills it with solid color or gradient
export const MyLockIcon = ({ gradient, color }) => {
    return (
        gradient ?
            <SvgIcon sx= {{ fontSize: '7vw' }}>
                <defs>
                    <linearGradient id="lock-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#B62F32'}} />
                        <stop offset="20%" style={{stopColor: '#4E41BC'}} />
                        <stop offset="40%" style={{stopColor: '#81B850'}} />
                        <stop offset="60%" style={{stopColor: '#96FCFD'}} />
                        <stop offset="80%" style={{stopColor: '#BF6C2F'}} />
                        <stop offset="100%" style={{stopColor: '#E9CC47'}} />
                    </linearGradient>
                </defs>
                <LockIcon sx={{ fill: "url(#lock-gradient)" }} />
            </SvgIcon>  
        : 
            <LockIcon sx={{ fontSize: '7vw', fill: color }} />
    );
}

MyLockIcon.propTypes = {
    gradient: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
};
