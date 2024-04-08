// SoundSettings.jsx
import React from 'react';
import { useSound } from './SoundContext';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const SoundSettings = () => {
    const {
        isSoundEffectEnabled,
        toggleSoundEffect,
        isBackgroundMusicEnabled,
        toggleBackgroundMusic,
        playSoundEffect, // Assume this method is now provided through your context
        playBackgroundMusic, // Assume this method is also provided through your context
    } = useSound();

    // Handler for toggling sound effects
    const handleToggleSoundEffect = () => {
        playSoundEffect('click');
        toggleSoundEffect();
    };

    // Handler for toggling background music
    const handleToggleBackgroundMusic = () => {
        // Assuming the playBackgroundMusic can check internally whether music should play
        if (!isBackgroundMusicEnabled) {
            playBackgroundMusic('Sample1');
        }
        toggleBackgroundMusic();
        playSoundEffect('click'); // Play click effect regardless of the music toggle state
    };

    return (
        <div>
            <FormControlLabel
                control={<Switch checked={isSoundEffectEnabled} onChange={handleToggleSoundEffect} />}
                label="Sound Effects"
            />
            <FormControlLabel
                control={<Switch checked={isBackgroundMusicEnabled} onChange={handleToggleBackgroundMusic} />}
                label="Background Music"
            />
        </div>
    );
};

export default SoundSettings;
