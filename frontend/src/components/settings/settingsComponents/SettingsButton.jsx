import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'pink',
  width: '10vw', // Set width to create a square button
  height: '5vh', // Set height to match width
  boxShadow: '0px 6px 10px rgba(0, 0, 255, 0.3)', // Blue shadow
  transition: 'box-shadow 0.3s ease', // Add transition for smoother effect
  borderRadius: '8px',
  '&:hover': {
    boxShadow: 'none', // Remove the shadow on hover
  },
});

const SettingsButton = () => {
  return (
    <StyledButton>
      Settings
    </StyledButton>
  );
};

export default SettingsButton;
