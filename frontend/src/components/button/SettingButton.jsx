import '../button/button.css';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "../../index.css"

const StyledBtn = styled(Button) ({
     // padding: '1.5%',
    fontFamily: 'var(--secondary-font-family)',
    fontSize: 'var(--secondary-font-size)',
    fontStyle: 'var(--secondary-font-style)',
    fontWeight: 'var(--secondary-font-weight)',
    letterSpacing: 'var(--secondary-letter-spacing)',
    lineHeight: 'var(--secondary-line-height)',
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'block',
    maxHeight: '100%',
    borderRadius: '50px',
    boarder: 'none',
    color: 'var(--black)',
    backgroundColor: 'var(--pink)',
    boxShadow: "var(--setting-drop-shadow)",
    cursor: 'pointer',
    '&:hover': {
    backgroundColor: 'var(--pink)',
    boxShadow: 'none',
    }
})

export default function SettingButton({ text, onClick, type = 'button' }) {
  return (
    <StyledBtn type={type} className="setting-long-button" onClick={onClick}>
      {text}
    </StyledBtn>
  )
}
