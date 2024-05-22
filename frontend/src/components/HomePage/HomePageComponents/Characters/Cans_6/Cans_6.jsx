import React from 'react';
import CansImage from '../../../../../assets/artwork/Individual_Assets/Characters/6-pack.png';

import './Cans_6.css';
import '../../../../../index.css';

export const Cans_6 = () => {
    return (
        <img 
            className="cans-image" 
            title="Cans"
            alt="6 Cans"
            src={CansImage}
        />
    );
};