import React from 'react';
import ToesImage from '../../../../../assets/artwork/Individual_Assets/Characters/10-toes.png';

import './Toes_10.css';
import '../../../../../index.css';

export const Toes_10 = () => {
    return (
        <img 
            className="toes-image" 
            title="Toes"
            alt="10 Toes"
            src={ToesImage}
        />
    );
};