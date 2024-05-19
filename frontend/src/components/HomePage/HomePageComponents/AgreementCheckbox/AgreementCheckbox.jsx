import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

import '../../../../index.css';

export const AgreementCheckbox = ({ id, isChecked, toggleCheckbox }) => {
    return (
        <Checkbox
            id={id}
            checked={isChecked}
            onChange={toggleCheckbox}
       
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
    isChecked: PropTypes.bool.isRequired,
    toggleCheckbox: PropTypes.func.isRequired,
};