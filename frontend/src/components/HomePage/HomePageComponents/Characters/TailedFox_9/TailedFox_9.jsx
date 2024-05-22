import React from 'react';
import FoxImage from '../../../../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';

import './TailedFox_9.css';
import '../../../../../index.css';

export const TailedFox_9 = () => {
    return (
        <img 
            className="fox-image" 
            title="Tailed Fox"
            alt="9 Tailed Fox"
            src={FoxImage}
        />
    );
};