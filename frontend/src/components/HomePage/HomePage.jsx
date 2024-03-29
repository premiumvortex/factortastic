// App.js
import React, { useState } from 'react';
import './HomePage.css';
import StartButton from './Start.png';
import { Agreement } from '../Agreement/Agreement';

export const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="HomePage">
            {/* <div className="container"> */}
                <h1>
                    <span className="factor">factor</span>
                    <span className="tastic">tastic!</span>
                </h1>
        
                <img onClick={handleClick} src={StartButton}></img>
        
                <div className="pop-up-container">
                    {showPopup && <Agreement onClose={handleClosePopup} />}   
                </div>    
            {/* </div> */}
             
        </div>
    );
}


