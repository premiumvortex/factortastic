import React from 'react';
import RainbowImage from '../../../../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';

import './Rainbow_7.css';
import '../../../../../index.css';

export const Rainbow_7 = () => {
    return (
        <img 
            className="rainbow-image" 
            title="Rainbow"
            alt="Rainbow"
            src={RainbowImage}
        />
    );
};