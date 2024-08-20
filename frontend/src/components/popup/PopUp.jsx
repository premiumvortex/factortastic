import React, { useState } from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

export default function PopUp({ Component, componentProps, anchor, setAnchor }) {
  const open = Boolean(anchor);
  const id = open ? 'popup' : undefined;

  function handleClosePopup() {
    setAnchor(null);
    if (componentProps.handleClosePopup) {
      componentProps.handleClosePopup();
    }
  };

  return (
    <div>
      <BasePopup id={id} open={open} anchor={anchor} style={{ margin: '1.5rem' }}>
        <Component {...componentProps} handleClosePopup={handleClosePopup} />
      </BasePopup>
    </div>
  );
}
