import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

/*
 * LockIcon Component: renders custom lock svg in the deck buttons
 * 
 * Props:
 * - color (string): color to fill lock icon
 */

export const LockIcon = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="41%" viewBox="0 0 54 68" style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient id="lock-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--red)' }} />
                    <stop offset="20%" style={{ stopColor: 'var(--blue)' }} />
                    <stop offset="40%" style={{ stopColor: 'var(--green)' }} />
                    <stop offset="60%" style={{ stopColor: 'var(--aqua)' }} />
                    <stop offset="80%" style={{ stopColor: 'var(--orange)' }} />
                    <stop offset="100%" style={{ stopColor: 'var(--yellow)' }} />
                </linearGradient>

                <filter id="drop-shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor='var(--black)' />
                </filter>
            </defs>

            <path 
                d="M27 0.666016C17.81 0.666016 10.3334 8.14268 10.3334 17.3327V27.3327H7.00004C5.23193 27.3327 
                3.53624 28.0351 2.286 29.2853C1.03575 30.5355 0.333374 32.2312 0.333374 33.9993V60.666C0.333374 62.4341 
                1.03575 64.1298 2.286 65.3801C3.53624 66.6303 5.23193 67.3327 7.00004 67.3327H47C48.7682 67.3327 50.4638 
                66.6303 51.7141 65.3801C52.9643 64.1298 53.6667 62.4341 53.6667 60.666V33.9993C53.6667 32.2312 52.9643 
                30.5355 51.7141 29.2853C50.4638 28.0351 48.7682 27.3327 47 27.3327H43.6667V17.3327C43.6667 8.14268 36.19 
                0.666016 27 0.666016ZM17 17.3327C17 11.8193 21.4867 7.33268 27 7.33268C32.5134 7.33268 37 11.8193 37 
                17.3327V27.3327H17V17.3327ZM30.3334 53.076V60.666H23.6667V53.076C22.5013 52.4087 21.5656 51.4038 20.9828 
                50.1939C20.4 48.984 20.1977 47.6258 20.4023 46.2986C20.607 44.9713 21.2091 43.7373 22.1293 42.7591C23.0494 
                41.781 24.2444 41.1046 25.5567 40.8193C26.5314 40.6038 27.5421 40.6098 28.5142 40.837C29.4863 41.0641 
                30.395 41.5065 31.1733 42.1316C31.9517 42.7567 32.5797 43.5485 33.0113 44.4487C33.4428 45.3489 33.6668 46.3344 
                33.6667 47.3327C33.6648 48.4985 33.3557 49.6432 32.7705 50.6515C32.1853 51.6598 31.3447 52.496 30.3334 53.076Z" 
                fill={color === 'var(--gradient)' ? 'url(#lock-gradient)' : color}  
                filter="url(#drop-shadow)"
            />
        </svg>
    );
}

LockIcon.propTypes = {
    color: PropTypes.string.isRequired,
};