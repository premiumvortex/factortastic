import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSound } from '../Sound/SoundContext.jsx';
import '../../index.css';

const StyledBtn = styled(Button)({
  position: 'fixed',
  minHeight: '64px',
  borderRadius: '15px',
  backgroundColor: 'var(--setting-background)',
  color: 'var(--black)',
  boxShadow: 'var(--drop-shadow)',
  '&:hover': {
    backgroundColor: 'var(--setting-background)',
    boxShadow: 'var(--strong-shadow)',
  },
});

export default function BackButton({text, type = 'button', onClick, soundEffect}) {
  const { playSoundEffect } = useSound(); // Use the sound context

  const handleClick = (e) => {
    if (soundEffect) {
      playSoundEffect(soundEffect); // Play the sound effect passed as a prop
    }
    onClick(e); // Execute the original onClick logic
  };

  return (
    <>
      <StyledBtn variant="contained" onClick={handleClick}>
        <ArrowBackIcon fontSize="large"/>
      </StyledBtn>
    </>
  );
}
