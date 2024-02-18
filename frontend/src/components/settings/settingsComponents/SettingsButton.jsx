import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'pink',
  boxShadow: '0px 3px 5px rgba(0, 0, 255, 0.3)', // Blue shadow
  transition: 'box-shadow 0.3s ease', // Add transition for smoother effect
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
