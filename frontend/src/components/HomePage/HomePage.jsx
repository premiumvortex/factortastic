import React, { useState } from 'react';

import { Agreement } from './HomePageComponents/Agreement/Agreement';
import { CharactersBackgroundImage } from './HomePageComponents/CharactersBackgroundImage/CharactersBackgroundImage';
import { HomePageTitle } from './HomePageComponents/HomePageTitle/HomePageTitle';
import { StartButton } from './HomePageComponents/StartButton/StartButton';

import './HomePage.css';
import '../../index.css';
import {SoundProvider} from "../Sound/SoundContext.jsx";

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
        <SoundProvider> //This needs to be removed once in production (This is here for rendering HomePage in storybook)
            <div className="home-page">
                <HomePageTitle />
                <CharactersBackgroundImage />
                <StartButton handleClick={handleStartButtonClick}/>
                {showAgreement && <Agreement closeAgreement={closeAgreement} />}
            </div>
        </SoundProvider>
    );
}
