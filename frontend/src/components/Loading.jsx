import React from "react";
import "./loading.css";
import factortasticCard from '../assets/artwork/Individual_Assets/Card-Background_With_Boarders.png'

export const Loading = () => {
    return (
        <div className="loading">
            <img className="Card-Background_With_Boarders" alt="Factortastic Card" src={factortasticCard} />
        </div>
    );
};
