import React, { useState } from 'react';

import { HomePageTitle } from '../HomePageTitle/HomePageTitle';
import { Agreement } from '../Agreement/Agreement';

import StartButton from './Start.png';

import './HomePage.css';
import '../../index.css';

// HomePage component shows start button which prompts user to read privacy policy and agree to terms and conditions
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


