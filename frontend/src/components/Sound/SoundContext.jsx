//soundContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { soundManager } from './SoundManager';

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
    const [isSoundEffectEnabled, setIsSoundEffectEnabled] = useState(true);
    const [isBackgroundMusicEnabled, setIsBackgroundMusicEnabled] = useState(true);

    const toggleSoundEffect = () => {
        setIsSoundEffectEnabled(prev => !prev);
        // Optionally play a sound effect here to indicate toggling, if desired
        if (isSoundEffectEnabled) {
            soundManager.playSoundEffect('click'); // Assuming 'click' is correctly defined in your SoundManager
        }
    };

    const toggleBackgroundMusic = () => {
        setIsBackgroundMusicEnabled(prev => !prev);
        // You might want to control the background music directly here, depending on your app's logic
        if (!isBackgroundMusicEnabled) { // If about to enable
            soundManager.playBackgroundMusic('Sample1'); // Play specific background music
        } else {
            // Optionally stop the music if the background music is being disabled
            soundManager.stopBackgroundMusic(); // This method would need to be added to SoundManager
        }
    };

    // Making playSoundEffect and playBackgroundMusic methods available in the context
    const playSoundEffect = (...args) => isSoundEffectEnabled && soundManager.playSoundEffect(...args);
    const playBackgroundMusic = (...args) => isBackgroundMusicEnabled && soundManager.playBackgroundMusic(...args);

    return (
        <SoundContext.Provider value={{
            isSoundEffectEnabled,
            toggleSoundEffect,
            isBackgroundMusicEnabled,
            toggleBackgroundMusic,
            playSoundEffect,
            playBackgroundMusic
        }}>
            {children}
        </SoundContext.Provider>
    );
};
