import React from 'react';
import MiceImage from '../../../../../assets/artwork/Individual_Assets/Characters/3-blind-mice.png';

import './Mice_3.css';
import '../../../../../index.css';

export const Mice_3 = () => {
    return (
        <div className='mice-container'>
            <img 
                className="mice-image" 
                title="Mice"
                alt="3 Mice"
                src={MiceImage}
            />
        </div>
       
    );
};