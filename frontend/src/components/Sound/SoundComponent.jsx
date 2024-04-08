// SoundComponents.jsx
import React from 'react';
import { Howl } from 'howler';
import { useSound } from './SoundContext';
import clickSound from '../../assets/sound/SoundEffects/Sample_Click.mp3';
import forg11 from '../../assets/sound/BackgroundMusic/11frogs_Theme_Music.mp3';

// Predefined sound effect paths
const soundEffects = {
    click: clickSound,
    // success: '/path/to/success/sound.mp3',
    // error: '/path/to/error/sound.mp3',
    // Add more sound effects as needed
};

// Predefined background music paths
const backgroundMusicTracks = {
    Sample1: forg11,
    // stage2: '/path/to/background/music/for/stage2.mp3',
    // stage3: '/path/to/background/music/for/stage3.mp3',
    // Add more tracks as needed
};

class SoundComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBackgroundMusic: null,
        };
        // Preload sound effects
        this.soundEffectHowls = Object.keys(soundEffects).reduce((acc, key) => {
            acc[key] = new Howl({ src: [soundEffects[key]], html5: true });
            return acc;
        }, {});
        this.currentBackgroundSrc = ''; // Keep track of the current background music source
    }

    playSoundEffect = (effectName) => {
        const { isSoundEffectEnabled } = this.context;
        if (isSoundEffectEnabled && this.soundEffectHowls[effectName]) {
            this.soundEffectHowls[effectName].play();
        }
    };

    playBackgroundMusic = (musicName) => {
        const { isBackgroundMusicEnabled } = this.context;
        const musicSrc = backgroundMusicTracks[musicName];
        if (isBackgroundMusicEnabled && this.currentBackgroundSrc !== musicSrc) {
            // Stop and unload the current background music if playing
            if (this.state.currentBackgroundMusic) {
                this.state.currentBackgroundMusic.unload();
            }
            // Play the selected background music
            const music = new Howl({
                src: [musicSrc],
                html5: true,
                loop: true,
                volume: 0.5,
            });
            music.play();
            this.setState({ currentBackgroundMusic: music });
            this.currentBackgroundSrc = musicSrc; // Update the current background music source
        } else if (!isBackgroundMusicEnabled && this.state.currentBackgroundMusic) {
            // Pause the background music if it's currently playing and the toggle is off
            this.state.currentBackgroundMusic.pause();
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const { isBackgroundMusicEnabled } = this.context;
        // Additional checks or updates based on context changes can be implemented here
        if (!isBackgroundMusicEnabled && prevState.currentBackgroundMusic) {
            prevState.currentBackgroundMusic.pause();
        } else if (isBackgroundMusicEnabled && prevState.currentBackgroundMusic && !prevState.currentBackgroundMusic.playing()) {
            prevState.currentBackgroundMusic.play();
        }
    }

    componentWillUnmount() {
        // Stop and unload the background music when the component unmounts
        if (this.state.currentBackgroundMusic) {
            this.state.currentBackgroundMusic.unload();
        }
    }

    render() {
        return null; // This component does not render anything itself
    }
}

SoundComponent.contextType = useSound;

export default SoundComponent;
