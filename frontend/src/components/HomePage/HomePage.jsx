import React, { useState } from 'react';

import { Agreement } from './HomePageComponents/Agreement/Agreement';
import { CharactersBackgroundImage } from './HomePageComponents/CharactersBackgroundImage/CharactersBackgroundImage';
import { HomePageTitle } from './HomePageComponents/HomePageTitle/HomePageTitle';
import { StartButton } from './HomePageComponents/StartButton/StartButton';

import './HomePage.css';
import '../../index.css';

// HomePage component displays title and a start button
// need to add setting icon button
export const HomePage = () => {
    const [showAgreement, setShowAgreement] = useState(false);

    const handleStartButtonClick = () => {
        setShowAgreement(true);
    };

    const handleCloseAgreement = () => {
        setShowAgreement(false);
    };

    return (
        <div className="home-page">
            <HomePageTitle />
            <StartButton handleClick={handleStartButtonClick}/>
            <div className="background-image"><CharactersBackgroundImage /></div>
            
            {showAgreement && <Agreement onClose={handleCloseAgreement} />}      
        </div>
    );
}