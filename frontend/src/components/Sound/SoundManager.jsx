// SoundManager.js
import { Howl } from 'howler';
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
    // Add more stages as needed
};


class SoundManager {
    constructor() {
        this.soundEffectHowls = Object.keys(soundEffects).reduce((acc, key) => {
            acc[key] = new Howl({ src: [soundEffects[key]], html5: true });
            return acc;
        }, {});
        this.backgroundMusicHowls = backgroundMusicTracks;
        this.currentBackgroundMusic = null;
    }

    playSoundEffect(effectName) {
        if (this.soundEffectHowls[effectName]) {
            this.soundEffectHowls[effectName].play();
        }
    }

    playBackgroundMusic(musicName) {
        const musicSrc = this.backgroundMusicHowls[musicName];
        if (this.currentBackgroundMusic) {
            this.currentBackgroundMusic.stop();
        }
        this.currentBackgroundMusic = new Howl({
            src: [musicSrc],
            html5: true,
            loop: true,
            volume: 0.5,
        });
        this.currentBackgroundMusic.play();
    }

    stopBackgroundMusic() {
        if (this.currentBackgroundMusic) {
            this.currentBackgroundMusic.stop();
            this.currentBackgroundMusic = null; // Reset the current background music
        }
    }

}

export const soundManager = new SoundManager();
