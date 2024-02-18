// GearIconButton.jsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon'; // You can import specific icons from '@mui/icons-material'

const GearIconButton = () => {
  return (
    <IconButton aria-label="gear-icon-button" color="primary">
      <Icon>settings</Icon> {/* You can replace 'settings' with the name of any Material-UI icon */}
    </IconButton>
  );
};

export default GearIconButton;
