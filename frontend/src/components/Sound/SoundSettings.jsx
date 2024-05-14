// SoundSettings.jsx
import React from 'react';
import { useSound } from './SoundContext';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MusicToggle from "../button/MusicToggle.jsx";
import SoundFxToggle from "../button/SoundFxToggle.jsx";

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
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr', // ratio of columns
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', // Full width of the container
            gap: '5%' // Space between columns
        }}>
            {/* First Row: Music */}
            <div className='sound-labels text-black'
                 style={{
                     textAlign: 'right',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'flex-end',
                     padding: '8px'
                 }}>
                Music:
            </div>
            <div style={{padding: '8px'}}>
                <FormControlLabel
                    control={<MusicToggle checked={isBackgroundMusicEnabled} onChange={handleToggleBackgroundMusic}/>}
                    label="" // Label is empty because it's separately handled
                    style={{margin: 'auto'}} // Center the switch in the grid cell
                />
            </div>

            {/* Second Row: SoundFx */}
            <div className='sound-labels text-black'
                 style={{
                     textAlign: 'right',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'flex-end',
                     padding: '8px'
                 }}>
                SoundFx:
            </div>
            <div style={{padding: '8px'}}>
                <FormControlLabel
                    control={<SoundFxToggle checked={isSoundEffectEnabled} onChange={handleToggleSoundEffect}/>}
                    label="" // Label is empty because it's separately handled
                    style={{margin: 'auto'}} // Center the switch in the grid cell
                />
            </div>
        </div>
    );
};

export default SoundSettings;
