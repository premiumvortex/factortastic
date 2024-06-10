import React from 'react';
import PropTypes from 'prop-types';
import LockIcon from '@mui/icons-material/Lock'; 
import SvgIcon from '@mui/material/SvgIcon';

import '../../../../index.css';

// displays the lock icon used in the DeckButton
// fills it with passed in color or gradient
export const MyLockIcon = ({ gradient, color }) => {
    return (
        gradient ?
            <SvgIcon sx= {{ fontSize: '7vw' }}>
                <defs>
                    <linearGradient id="lock-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'var(--red)'}} />
                        <stop offset="20%" style={{stopColor: 'var(--blue)'}} />
                        <stop offset="40%" style={{stopColor: 'var(--green)'}} />
                        <stop offset="60%" style={{stopColor: 'var(--aqua)'}} />
                        <stop offset="80%" style={{stopColor: 'var(--orange)'}} />
                        <stop offset="100%" style={{stopColor: 'var(--yellow)'}} />
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
