import React from 'react';
import StarImage from '../../../../../assets/artwork/Individual_Assets/Characters/5-point-star.png';

import './Star_5.css';
import '../../../../../index.css';

export const Star_5 = () => {
    return (
        <img 
            className="star-image" 
            title="Star"
            alt="5 Point Star"
            src={StarImage}
        />
    );
};