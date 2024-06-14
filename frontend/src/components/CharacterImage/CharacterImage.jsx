import React from 'react';
import PropTypes from 'prop-types';

// import character images
import ShoesImage from '../../assets/artwork/Individual_Assets/Characters/2-shoes-converse-insp.png';
import MiceImage from '../../assets/artwork/Individual_Assets/Characters/3-blind-mice.png';
import LeafImage from '../../assets/artwork/Individual_Assets/Characters/4-leaf-clover.png';
import StarImage from '../../assets/artwork/Individual_Assets/Characters/5-point-star.png';
import CansImage from '../../assets/artwork/Individual_Assets/Characters/6-pack.png';
import RainbowImage from '../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';
import OctopusImage from '../../assets/artwork/Individual_Assets/Characters/8-octopus.png';
import FoxImage from '../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';
import ToesImage from '../../assets/artwork/Individual_Assets/Characters/10-toes.png';
import FrogsImage from '../../assets/artwork/Individual_Assets/Characters/11-frog.png';
import EggsImage from '../../assets/artwork/Individual_Assets/Characters/12-eggs.png';

import './CharacterImage.css';

// images dictionary connects character string (key) to its image object (value)
const images = {
    shoes: ShoesImage,
    mice: MiceImage,
    leaf: LeafImage,
    star: StarImage,
    cans: CansImage,
    rainbow: RainbowImage,
    octopus: OctopusImage,
    fox: FoxImage,
    toes: ToesImage,
    frogs: FrogsImage,
    eggs: EggsImage
};

/*
 * CharacterImage Component: displays an image of given character
 * 
 * Props:
 * - character (string): determines which character is shown
 */

export const CharacterImage = ({ character}) => {
    const image = images[character];

    return (
        <img 
            className="character-image" 
            title={character} 
            alt={`${character} character`}
            src={image}
        />
    );
};

CharacterImage.propTypes = {
    character: PropTypes.string.isRequired,
};