import React, { useState } from 'react';

import { Agreement } from './HomePageComponents/Agreement/Agreement';
import { CharactersBackgroundImage } from './HomePageComponents/CharactersBackgroundImage/CharactersBackgroundImage';
import { HomePageTitle } from './HomePageComponents/HomePageTitle/HomePageTitle';
import { StartButton } from './HomePageComponents/StartButton/StartButton';

import './HomePage.css';
import '../../index.css';

// HomePage component displays title and a start button
// someone will make setting icon button
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
            <StartButton handleClick={handleStartButtonClick}/>
            <CharactersBackgroundImage />
            {showAgreement && <Agreement onClose={closeAgreement} />}      
        </div>
    );
}