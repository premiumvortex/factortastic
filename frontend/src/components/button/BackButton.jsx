import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSound } from '../Sound/SoundContext.jsx';

const StyledBtn = styled(Button)({
  minHeight: '64px',
  alignContent: 'center',
  borderRadius: '15px',
  border: 'none',
  backgroundColor: '#516EBE',
  color: 'black',
  boxShadow: '4px 4px 8px rgba(0, 0, 0, .8)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#516EBE',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 1)',
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
