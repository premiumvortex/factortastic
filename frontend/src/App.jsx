import React, { useState } from 'react';
import PopUp from './components/popup/PopUp';
import Settings from './components/Settings/Settings';
import SettingsIconButton from './components/button/SettingIconButton';

export default function App() {
  const [anchor, setAnchor] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleOpenSettings = (event) => {
    setAnchor(event.currentTarget);
    setShowButton(false);
    setCurrentComponent(<Settings handleClosePopup={handleClosePopup} />);
  };

  const handleClosePopup = () => {
    setAnchor(null);
    setShowButton(true);
    setCurrentComponent(null);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'end' }}>
      {showButton && <SettingsIconButton onClick={handleOpenSettings} />}
      {currentComponent && (
        <PopUp
          Component={currentComponent.type}
          componentProps={currentComponent.props}
          anchor={anchor}
          setAnchor={setAnchor}
        />
      )}
    </div>
  );
}
