import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSound } from '../Sound/SoundContext.jsx';
import '../../index.css';

import PropTypes from "prop-types";

const StyledBtn = styled(Button)({
  position: 'fixed',
  zIndex: '10',
  minHeight: '64px',
  borderRadius: '15px',

  border: 'none',
  backgroundColor: 'var(--setting-background)',
  color: 'black',
  boxShadow: 'var(--drop-shadow)',
  cursor: 'pointer',
  margin: '1.5rem 0 0 1.5rem',
  '&:hover': {
    backgroundColor: 'var(--setting-background)',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 1)',
  },
  '&.Mui-disabled': {
    backgroundColor: 'var(--setting-background)', // Gray color for disabled state to ensure visibility
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
});

export default function BackButton({text, type = 'button', onClick, soundEffect='click', disabled = false }) {
  const { playSoundEffect } = useSound(); // Use the sound context

  const handleClick = (e) => {
    if (soundEffect && !disabled) {
      playSoundEffect(soundEffect);
    }
    if (!disabled) {
      onClick(e);
    }
  };

  return (
      <>
        <StyledBtn
            variant="contained"
            onClick={handleClick}
            disabled={disabled}
            type={type}
        >
          <ArrowBackIcon fontSize="large" />
        </StyledBtn>
      </>
  );
}

BackButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  soundEffect: PropTypes.string,
  disabled: PropTypes.bool,
};
