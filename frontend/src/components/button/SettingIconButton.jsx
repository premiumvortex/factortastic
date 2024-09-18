import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PopUp from '../popup/PopUp';
import Settings from '../Settings/Settings';

const StyledBtn = styled(Button)({
    backgroundColor: 'var(--gray)',
    boxShadow: 'var(--drop-shadow)',
    aspectRatio: '1 / 1',
    borderRadius: '50px',
    color: 'rgb(77, 77, 77)',
    border: 'none',
    '&:hover': {
        boxShadow: 'var(--setting-drop-shadow-hover)',
        backgroundColor: 'var(--setting-2nd-gray)',
    },
});

export default function SettingsIconButton({ top = '5%', right = '5%' }) {
    const [anchor, setAnchor] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenSettings = (event) => {
        setAnchor(event.currentTarget);
        setOpenPopup(true); // Open the popup
    };

    const handleClosePopup = () => {
        setAnchor(null);
        setOpenPopup(false); // Close the popup and make the button reappear
    };

    return (
        <div style={{ position: 'absolute', top, right }}>
            {/* Conditionally render the button only when popup is not open */}
            {!openPopup && (
                <StyledBtn onClick={handleOpenSettings}>
                    <SettingsIcon style={{ fontSize: '4rem' }} className='setting-btn-icon' />
                </StyledBtn>
            )}

            {/* Render the popup when open */}
            {openPopup && (
                <PopUp
                    Component={Settings} // The Settings component to render inside the PopUp
                    componentProps={{ handleClosePopup }} // Pass the close handler as a prop
                    anchor={anchor}
                    setAnchor={setAnchor}
                />
            )}
        </div>
    );
}
