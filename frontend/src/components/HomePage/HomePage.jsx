import React, { useState } from 'react';
import './HomePage.css';
import StartButton from './Start.png';
import { Agreement } from '../Agreement/Agreement';

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
            <h1 className="home-page-heading">
                <span className="factor">factor</span>
                <span className="tastic">tastic!</span>
            </h1>
    
            <img className="start-button" onClick={handleClick} src={StartButton}></img>
    
            <div className="pop-up-container">
                {showAgreement && <Agreement onClose={handleClosePopup} />}   
            </div>           
        </div>
    );
}


