import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

import '../../../../index.css';

/*
 * AgreementCheckbox Component: displays MUI checkbox in Agreement component
 * 
 * Props:
 * - id (string): id
 * - checked (bool): current state of checkbox
 * - onChange (function): toggles checkbox unless user has not opened privacy policy
 */

export const AgreementCheckbox = ({ id, checked, onChange }) => {
    return (
        <Checkbox
            id={id}
            checked={checked}
            onChange={onChange}
            sx={{
                color: 'black',
                '&.Mui-checked': { color: 'var(--cyan)' },
                '& .MuiSvgIcon-root': { fontSize: '48px' }
            }}
        />
    );
};

AgreementCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};
