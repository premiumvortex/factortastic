import React, { useState } from 'react';

import { Agreement } from './HomePageComponents/Agreement/Agreement';
import { CharactersBackgroundImage } from './HomePageComponents/CharactersBackgroundImage/CharactersBackgroundImage';
import { HomePageTitle } from './HomePageComponents/HomePageTitle/HomePageTitle';
import { StartButton } from './HomePageComponents/StartButton/StartButton';
import { useSound } from '..//Sound/SoundContext.jsx';

import './HomePage.css';
import '../../index.css';

/*
 * HomePage Component: displays title and a start button
 * Props: none
 */

export const HomePage = () => {
    const [showAgreement, setShowAgreement] = useState(false);

    const handleStartButtonClick = () => {
        setShowAgreement(true);
    };

    const closeAgreement = () => {
        setShowAgreement(false);
    };

    return (
        <div className="home-page">
            <HomePageTitle />
            <CharactersBackgroundImage />
            <StartButton handleClick={handleStartButtonClick}/>
            {showAgreement && <Agreement closeAgreement={closeAgreement} />} 
        </div>
    );
}
