import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'rgba(255, 84, 229, 1)',
  width: '30vw', // Set width to create a square button
  height: '6vh', // Set height to match width
  boxShadow: '0px 8px 25px 0px rgba(150, 252, 253, 1)', // Blue shadow
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
