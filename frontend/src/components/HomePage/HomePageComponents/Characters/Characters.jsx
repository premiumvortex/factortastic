import React from 'react';

import { Shoes_2 } from './Shoes_2/Shoes_2';
import { Mice_3 } from './Mice_3/Mice_3';
import { SidedLeaf_4 } from './SidedLeaf_4/SidedLeaf_4';
import { Star_5 } from './Star_5/Star_5';
import { Cans_6 } from './Cans_6/Cans_6';
import { Rainbow_7 } from './Rainbow_7/Rainbow_7';
import { TentacleOctopus_8 } from './TentacleOctopus_8/TentacleOctopus_8';
import { TailedFox_9 } from './TailedFox_9/TailedFox_9';
import { Toes_10 } from './Toes_10/Toes_10';
import { Frogs_11 } from './Frogs_11/Frogs_11';
import { Eggs_12 } from './Eggs_12/Eggs_12';

import './Characters.css';
import '../../../../index.css';

// Characters component displays the background image of the HomePage
// imports each character component
export const Characters = () => {
    return (
        <div className='characters-container'>
            <div className='shoes-container'><Shoes_2 /></div>
            <div className='fox-container'><TailedFox_9 /></div>
            <div className='mice-container'><Mice_3 /></div>
            <div className='leaf-container'><SidedLeaf_4 /></div>
            <div className='star-container'><Star_5 /></div>
            <div className='cans-container'><Cans_6 /></div>
            <div className='rainbow-container'><Rainbow_7 /></div>
            <div className='octopus-container'><TentacleOctopus_8 /></div>
            <div className='toes-container'><Toes_10 /></div>
            <div className='frogs-container'><Frogs_11 /></div>
            <div className='eggs-container'><Eggs_12 /></div>
        </div>
    );
};
