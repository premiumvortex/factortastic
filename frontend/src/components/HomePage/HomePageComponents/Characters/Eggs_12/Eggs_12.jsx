import React from 'react';
import EggsImage from '../../../../../assets/artwork/Individual_Assets/Characters/12-eggs.png';

import './Eggs_12.css';
import '../../../../../index.css';

export const Eggs_12 = () => {
    return (
        <img 
            className="eggs-image" 
            title="Eggs"
            alt="12 Eggs"
            src={EggsImage}
        />
    );
};