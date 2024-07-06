import React from 'react';
import LockIcon from '@mui/icons-material/Lock'; 
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';

import '../../../../index.css';

/*
 * MyLockIcon Component: renders MUI lock icon used in the deck buttons
 * 
 * Props:
 * - color (string): color to fill if gradient is false
 */

export const MUILockIcon = ({ color }) => {
    return (
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

                <filter id="drop-shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor='var(--black)' />
                </filter>
            </defs>

            <LockIcon sx={{ fill: color === 'var(--gradient)' ? 'url(#lock-gradient)' : color, filter: "url(#drop-shadow)" }} /> 
        </SvgIcon>  
    );
}

MUILockIcon.propTypes = {
    color: PropTypes.string.isRequired,
};
