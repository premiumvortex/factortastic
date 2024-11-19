import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import { useSound } from '../../../Sound/SoundContext.jsx';

/*
 * AgreementCheckbox Component: displays MUI checkbox in Agreement component
 *
 * Props:
 * - id (string): id
 * - checked (bool): current state of checkbox
 * - onChange (function): toggles checkbox unless user has not opened privacy policy
 * - soundEffect (string): sound effect to play on change (optional)
 */

export const AgreementCheckbox = ({ id, checked, onChange, soundEffect='click' }) => {
    const { playSoundEffect } = useSound();

    const handleChange = (event) => {
        if (soundEffect) {
            playSoundEffect(soundEffect); // Play the specified sound effect
        }
        onChange(event); // Call the provided onChange handler
    };

    return (
        <Checkbox
            id={id}
            checked={checked}
            onChange={handleChange}
            sx={{
                color: 'black',
                '&.Mui-checked': { color: 'var(--cyan)' },
                '& .MuiSvgIcon-root': {
                    fontSize: '5vw',
                    minWidth: '5rem',
                    minHeight: '5rem'
                }
            }}
        />
    );
};

AgreementCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    soundEffect: PropTypes.string, // Optional sound effect prop
};
