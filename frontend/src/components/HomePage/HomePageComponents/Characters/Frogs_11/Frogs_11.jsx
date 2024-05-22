import React from 'react';
import FrogsImage from '../../../../../assets/artwork/Individual_Assets/Characters/11-frog.png';

import './Frogs_11.css';
import '../../../../../index.css';

export const Frogs_11 = () => {
    return (
        <img 
            className="frogs-image" 
            title="Frogs"
            alt="11 Frogs"
            src={FrogsImage}
        />
    );
};