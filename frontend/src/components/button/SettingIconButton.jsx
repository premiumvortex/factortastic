import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import '../../index.css'

// Anna: add position: absolute, top, and left properties when ready to use.
// Anna: There is no "base"/root color for the setting icon in index.css. Used rgb on 'color' prop for now.
const StyledBtn = styled(Button)({
 backgroundColor: 'var(--gray)',
 boxShadow: 'var(--drop-shadow)',
 height: '10vh',
 width: '4vw',
 borderRadius: '50px',
 color: 'rgb(77, 77, 77)',
 border: 'none',
 '&:hover': {
  boxShadow: 'var(--setting-drop-shadow-hover)',
  backgroundColor: 'var(--setting-2nd-gray)',
 },
});

export default function SettingsIconButton({onClick}) {
  return (
    <div className="setting-btn-icon-container">
      <StyledBtn onClick={onClick}>
        <SettingsIcon style={{ fontSize: '4rem' }} className='setting-btn-icon'/>
      </StyledBtn>
    </div>
  );
}
