import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import '../../index.css';

const StyledBtn = styled(Button)({
  position: 'absolute',
  top: '2vh',
  left: '1vw',
  minHeight: '4rem',
  alignContent: 'center',
  borderRadius: '15px',
  backgroundColor: 'var(--setting-background)',
  color: 'var(--black)',
  boxShadow: 'var(--drop-shadow)',
  '&:hover': {
    backgroundColor: 'var(--setting-background)',
    boxShadow: 'var(--strong-shadow)',
  },
});

export default function BackButton({onClick}) {
  return (
    <>
      <StyledBtn variant="contained" onClick={onClick}>
        <ArrowBackIcon fontSize="large"/>
      </StyledBtn>
    </>
  );
}
