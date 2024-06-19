import '../button/button.css';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledBtn = styled(Button) ({
 padding: '1.5%',
 width: '100%',
 maxHeight: '100%',
 borderRadius: '50px',
 boarder: 'none',
 fontSize: '2rem',
 color: 'black',
  backgroundColor: '#FF54E5',
  boxShadow: '0px 8px 8px rgba(96, 252, 253, 0.5)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#FF54E5',
    boxShadow: '0px 8px 8px rgba(96, 252, 253, 0)'
  }
})

export default function SettingButton({ text, onClick, type = 'button' }) {
  return (
    <StyledBtn type={type} className="setting-long-button" onClick={onClick}>
      {text}
    </StyledBtn>
  )
}
