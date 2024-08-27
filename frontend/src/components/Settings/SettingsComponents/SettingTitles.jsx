import React from "react";
import "../settings.css"
import '../../../index.css';

export default function SettingTitles() {
  return (
      <div className='setting-title secondary-text'>
        <span style={{color: 'var(--cyan)', fontSize: '5vw'}}>Game</span>
        <span style={{ color: 'var(--pink)', fontSize: '5vw' }}>Settings</span>
      </div>
  );
}
