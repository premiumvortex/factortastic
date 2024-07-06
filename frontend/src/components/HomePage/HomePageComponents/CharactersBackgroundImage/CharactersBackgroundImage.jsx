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

    const resizeContainer = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        // If window is taller relative to the desired aspect ratio
        if (windowWidth / windowHeight < aspectRatio) {
            setDimensions({
                width: `${windowWidth}px`,
                height: `${windowWidth / aspectRatio}px`,
            });
        } 

        // If window is wider relative to the desired aspect ratio
        else {
            setDimensions({
                width: `${windowHeight * aspectRatio}px`,
                height: `${windowHeight}px`,
            });
        }
    };
    

    useEffect(() => {
        window.addEventListener('resize', resizeContainer);
        resizeContainer(); 
    
        return () => {
          window.removeEventListener('resize', resizeContainer);
        };
    }, []);



    return (
        <div className='background-image-container'>
            <div className='photo-container'
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
        </div>
    );
};


// someone will make setting icon button
