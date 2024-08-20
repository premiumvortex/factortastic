import React, { useState, useEffect } from 'react';
import LottieAnimation from "./animation/LottieAnimation.jsx";
import Frog_Snatching_fly from "../assets/animations/Frog_Snatching_Fly.json"

const RandomPlacer = () => {
    const [count, setCount] = useState(0);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            setPositions((prevPositions) => [
                ...prevPositions,
                {
                    top: Math.random() * (window.innerHeight - 100), // Adjust 100 based on your animation's height
                    left: Math.random() * (window.innerWidth - 100), // Adjust 100 based on your animation's width
                },
            ]);
        }, 200000000); // 5 per second (1000 ms / 5)

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{ position: 'fixed', top: 0, right: 0, padding: '10px', background: 'rgba(0,0,0,0.5)', color: 'white', zIndex: 1000 }}>
                Count: {count}
            </div>
            {positions.map((pos, index) => (
                <div key={index} style={{ position: 'absolute', top: `${pos.top}px`, left: `${pos.left}px` }}>
                    <LottieAnimation animationData={Frog_Snatching_fly} />
                </div>
            ))}
        </div>
    );
};

export default RandomPlacer;
