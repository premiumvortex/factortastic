import React, { useEffect, useState } from 'react';
import { CharacterImage } from '../../../CharacterImage/CharacterImage';

import './CharactersBackgroundImage.css';

// list of character names
const characters = ['shoes','mice','leaf','star','cans','rainbow','octopus','fox','toes','frogs','eggs'];

/*
 * CharactersBackgroundImage Component: displays background image of the HomePage and positions each character image
 * Props: none
 */

export const CharactersBackgroundImage = () => {
    const aspectRatio = 1.6;
    const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' });

    // Sets dimensions of characters-container to maintain aspectRatio and fit on screen
    const resizeContainer = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        // If window is taller than aspectRatio
        if (windowWidth / windowHeight < aspectRatio) {
            setDimensions({
                width: `${windowWidth}px`,
                height: `${windowWidth / aspectRatio}px`,
            });
        } 

        // If window is wider than aspectRatio
        else {
            setDimensions({
                width: `${windowHeight * aspectRatio}px`,
                height: `${windowHeight}px`,
            });
        }
    };
    
    // Call resizeContainer when screen size changes
    useEffect(() => {
        window.addEventListener('resize', resizeContainer);
        resizeContainer(); 
    
        return () => {
          window.removeEventListener('resize', resizeContainer);
        };
    }, []);

    return (
        <div 
            className='characters-container'
            style={{
                width: dimensions.width,
                height: dimensions.height,
            }}
        >
            {characters.map(character => (
                <div key={character} className={`${character}-container`}>
                    <CharacterImage character={character} />
                </div>
            ))}
        </div>
    );
};


// someone will make setting icon button
