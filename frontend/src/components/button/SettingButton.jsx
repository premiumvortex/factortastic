import '../button/button.css';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "../../index.css";
import { useSound } from '../Sound/SoundContext.jsx';

const StyledBtn = styled(Button)({
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
    border: 'none',
    color: 'var(--black)',
    backgroundColor: 'var(--pink)',
    boxShadow: "var(--setting-drop-shadow)",
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'var(--pink)',
        boxShadow: 'none',
    },
});

export default function SettingButton({ text, onClick, type = 'button', soundEffect }) {
    const { playSoundEffect } = useSound(); // Use the sound context

    const handleClick = (e) => {
        if (soundEffect) {
            playSoundEffect(soundEffect); // Play the sound effect passed as a prop
        }
        onClick(e); // Execute the original onClick logic
    };

    return (
        <StyledBtn type={type} className="setting-long-button" onClick={handleClick}>
            {text}
        </StyledBtn>
    );
}
