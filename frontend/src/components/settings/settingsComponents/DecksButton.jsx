// DecksButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'red', // Change background color to red
  width: '5vw', // Set width to create a square button
  height: '5vw', // Set height to match width
  boxShadow: '0px 6px 10px rgba(0, 0, 255, 0.3)', // Blue shadow
  transition: 'box-shadow 0.3s ease', // Add transition for smoother effect
  borderRadius: '8px', // Remove corner radius to make it square
  '&:hover': {
    boxShadow: 'none', // Remove the shadow on hover
  },
});

const DecksButton = () => {
  return (
    <StyledButton>
      Decks
    </StyledButton>
  );
};

export default DecksButton;
