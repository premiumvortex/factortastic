import React from "react";
import "../settings.css"
import '../../../index.css';

export default function SettingTitles() {
  return (
      <div className='setting-title'>
        <span style={{color: 'var(--cyan)', fontSize: '6vw', WebkitTextStroke: ".1rem black",textShadow: 'var(--drop-shadow)'}}>Game</span>
        <span style={{color: 'var(--pink)', fontSize: '6vw', WebkitTextStroke: ".1rem black", textShadow: 'var(--drop-shadow)'}}>Settings</span>
      </div>
  );
}
