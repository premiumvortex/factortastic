import React, { useEffect } from 'react';
import './loading.css';
import factortasticCard from '../assets/artwork/Individual_Assets/Card-Background_With_Boarders.png';
import CircularIndeterminate from './Progress.jsx';

export const Loading = ({ onDone }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDone(); // Call the callback after 8 seconds
        }, 8000);

        return () => clearTimeout(timer);
    }, [onDone]);

    return (
        <div className="loading">
            <img className="Card-Background_With_Boarders" alt="Factortastic Card" src={factortasticCard}/>
            <CircularIndeterminate/>
        </div>
    );
};
