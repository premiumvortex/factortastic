import React, { useState } from 'react';

import { HomePageTitle } from './HomePageComponents/HomePageTitle/HomePageTitle';
import { StartButton } from './HomePageComponents/StartButton/StartButton';
import { Agreement } from './HomePageComponents/Agreement/Agreement';

import './HomePage.css';
import '../../index.css';

// HomePage component displays title and a start button
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
            <StartButton handleClick={handleClick}/>

            {showAgreement && <Agreement onClose={handleClosePopup} />}      
        </div>
    );
}
