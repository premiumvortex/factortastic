// App.js
import React, { useState } from 'react';
import './HomePage.css';
import StartButton from './Start.png';
import { Agreement } from '../Agreement/Agreement';
import { PrivacyPolicyPage } from '../PrivacyPolicyPage/PrivacyPolicyPage';

export const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPrivacyPage, setShowPrivacyPage] = useState(false)

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="home-page">
            <h1 className="home-page-heading">
                <span className="factor">factor</span>
                <span className="tastic">tastic!</span>
            </h1>
    
            <img className="start-button" onClick={handleClick} src={StartButton}></img>
    
            <div className="pop-up-container">
                {showPopup && <Agreement onClose={handleClosePopup} />}   
            </div>           
        </div>
    );
}


