import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSound } from '../Sound/SoundContext.jsx';

export default function SettingsIconButton({ onClick, soundEffect='click' }) {
    const { playSoundEffect } = useSound(); // Use the sound context

    const handleClick = (e) => {
        if (soundEffect) {
            playSoundEffect(soundEffect); // Play the specified sound effect
        }
        onClick(e); // Execute the original onClick function
    };

    return (
        <div className="setting-btn-icon-container">
            <SettingsIcon
                style={{ fontSize: 'inherit' }}
                onClick={handleClick} // Use the new click handler
                className="setting-btn-icon"
            />
        </div>
    );
}
