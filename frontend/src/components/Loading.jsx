import React from "react";
import "./loading.css";
import factortasticCard from '../assets/artwork/Individual_Assets/Card-Background_With_Boarders.png'
import CircularIndeterminate from './Progress.jsx';


export const Loading = () => {
    return (
        <>
            <div className="loading">
                <img className="Card-Background_With_Boarders" alt="Factortastic Card" src={factortasticCard}/>
                <CircularIndeterminate/>
            </div>
        </>

    );
};
