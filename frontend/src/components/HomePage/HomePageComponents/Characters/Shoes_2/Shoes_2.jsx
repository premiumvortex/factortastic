
import React from 'react';
import ShoesImage from '../../../../../assets/artwork/Individual_Assets/Characters/2-shoes-converse-insp.png';

import './Shoes_2.css';
import '../../../../../index.css';

export const Shoes_2 = () => {
    return (
        <img 
            className="shoes-image" 
            title="Shoes"
            alt="2 Shoes"
            src={ShoesImage}
        />
    );
};
