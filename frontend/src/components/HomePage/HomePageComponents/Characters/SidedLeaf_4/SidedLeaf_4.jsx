import React from 'react';
import LeafImage from '../../../../../assets/artwork/Individual_Assets/Characters/4-leaf-clover.png';

import './SidedLeaf_4.css';
import '../../../../../index.css';

export const SidedLeaf_4 = () => {
    return (
        <img 
            className="leaf-image" 
            title="4 Sided Clover"
            alt="4 Sided Clover"
            src={LeafImage}
        />
    );
};