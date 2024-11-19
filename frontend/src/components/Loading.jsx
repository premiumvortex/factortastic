import React, { useEffect } from 'react';
import './loading.css';
import factortasticCard from '../assets/artwork/Individual_Assets/Card-Background_With_Boarders.png';
import CircularIndeterminate from './Progress.jsx';

export const Loading = ({ onDone }) => {
    useEffect(() => {
        let isMounted = true; // Track if the component is mounted

        const timer = setTimeout(() => {
            if (isMounted) {
                onDone(); // Only call the callback if the component is still mounted
            }
        }, 800);

        return () => {
            isMounted = false; // Mark as unmounted
            clearTimeout(timer); // Cleanup the timer
        };
    }, [onDone]);

    return (
        <div className="loading">
            <img className="Card-Background_With_Boarders" alt="Factortastic Card" src={factortasticCard} />
            <CircularIndeterminate />
        </div>
    );
};
