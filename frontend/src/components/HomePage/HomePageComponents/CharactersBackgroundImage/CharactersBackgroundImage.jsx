import React, { useState } from 'react';
import { CharacterImage } from '../../../CharacterImage/CharacterImage';

import './CharactersBackgroundImage.css';
// import './test.css';

// list of character strings to loop through
const characters = ['shoes','mice','leaf','star','cans','rainbow','octopus','fox','toes','frogs','eggs'];

// Characters component displays the background image of the HomePage
// Displays each character and positions them as needed
// someone will make setting icon button
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

