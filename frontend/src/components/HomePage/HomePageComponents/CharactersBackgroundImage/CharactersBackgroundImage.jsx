import React from 'react';
import { CharacterImage } from '../../../CharacterImage/CharacterImage';

import './CharactersBackgroundImage.css';

// list of character names
const characters = ['shoes','mice','leaf','star','cans','rainbow','octopus','fox','toes','frogs','eggs'];

/*
 * CharactersBackgroundImage Component: displays background image of the HomePage and positions each character image
 * Props: none
 */

export const CharactersBackgroundImage = () => {
    return (
        <div className='background-image-container'>
            <div className='photo-container'>
                {characters.map(character => (
                    <div key={character} className={`${character}-container`}>
                        <CharacterImage character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};





// someone will make setting icon button
