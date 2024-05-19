import React, { useState } from 'react';

import { HomePageTitle } from './HomePageComponents/HomePageTitle/HomePageTitle';
import { Agreement } from './HomePageComponents/Agreement/Agreement';

import StartButton from './Start.png';

import './HomePage.css';
import '../../index.css';

// HomePage component displays a start button which shows the Agreement component when the user clicks on it
export const HomePage = () => {
    const [showAgreement, setShowAgreement] = useState(false);

    const handleClick = () => {
        setShowAgreement(true);
    };

    const handleClosePopup = () => {
        setShowAgreement(false);
    };

    return (
        <div className="home-page">
            <HomePageTitle />

            <img className="start-button" onClick={handleClick} src={StartButton}></img>
           
            {showAgreement && <Agreement onClose={handleClosePopup} />}      
        </div>
    );
}


