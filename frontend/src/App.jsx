import React from 'react';
import SettingsIconButton from './components/button/SettingIconButton';

export default function App() {
  return (
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        {/* One-liner to call the button, no need to handle popup logic */}
        <SettingsIconButton top="2%" right="2%" />
      </div>
  );
}
