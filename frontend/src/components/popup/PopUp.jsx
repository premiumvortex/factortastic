import React, {useState} from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import Settings from '../Settings/Settings';
import SettingsIconButton from '../button/SettingIconButton';

export default function PopUp() {
  const [anchor, setAnchor] = useState(null);

  function handleClick(event) {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'setting-popup' : undefined;

  function handleClosePopup() {
    setAnchor(null);
  };

  return (
    <div className='flex justify-center'>
      <SettingsIconButton onClick={handleClick}/>
      <BasePopup id={id} open={open} anchor={anchor}>
        <PopupBody>
          <Settings handleClosePopup={handleClosePopup} />
        </PopupBody>
      </BasePopup>
    </div>
  );
}

const PopupBody = styled('a')(
  ({ theme }) => `
  width: 1000px;
  min-width: 600px;`
)
