import React from 'react';

import { DecksGrid } from '../DecksGrid/DecksGrid';

import '../../index.css';
import './ChooseADeckPage.css';

export const ChooseADeckPage = () => {
    return (
        <div className="choose-deck-page">
            <DecksGrid />
        </div>
    );
}
