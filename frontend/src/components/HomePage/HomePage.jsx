import React, { useState } from 'react';
import { Agreement } from '../Agreement/Agreement';
import StartButton from './Start.png';

import './HomePage.css';
import '../../index.css';

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
            <h1 className="home-page-title">
                <span className="page-title factor">factor</span>
                <span className="page-title text-pink">tastic!</span>
            </h1>
    
            <img className="start-button" onClick={handleClick} src={StartButton}></img>
    
            <div className="pop-up-container">
                {showAgreement && <Agreement onClose={handleClosePopup} />}   
            </div>           
        </div>
    );
}


