import React from 'react';
import OctopusImage from '../../../../../assets/artwork/Individual_Assets/Characters/8-octopus.png';

import './TentacleOctopus_8.css';
import '../../../../../index.css';

export const TentacleOctopus_8 = () => {
    return (
        <img 
            className="octopus-image" 
            title="Octopus"
            alt="Octopus"
            src={OctopusImage}
        />
    );
};

