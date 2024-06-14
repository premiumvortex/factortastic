import React from 'react';
import LockIcon from '@mui/icons-material/Lock'; 
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';

import '../../../../index.css';

/*
 * MyLockIcon Component: renders MUI lock icon used in the deck buttons
 * 
 * Props:
 * - gradient (boolean): Determines if lock is solid or gradient color
 * - color (string): color to fill if gradient is false
 */

export const MUILockIcon = ({ gradient, color }) => {
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
            </defs>
            <LockIcon sx={{ fill: gradient ? 'url(#lock-gradient)' : color }} /> 
        </SvgIcon>  
    );
}

MUILockIcon.propTypes = {
    gradient: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
};