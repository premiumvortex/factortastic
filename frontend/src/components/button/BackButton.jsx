import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledBtn = styled(Button)({
  position: 'absolute',
  top: '10px',
  left: '10px',
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

export default function BackButton({onClick}) {
  return (
    <>
      <StyledBtn variant="contained" onClick={onClick}>
        <ArrowBackIcon fontSize="large"/>
      </StyledBtn>
    </>
  );
}
