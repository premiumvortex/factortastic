import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Loading } from "./components/Loading.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 8000); // 10000 milliseconds = 10 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {/* The content that should be displayed after the loading screen */}
            <h1>Welcome to the app!</h1>
            <img src={reactLogo} alt="React logo" />
            <img src={viteLogo} alt="Vite logo" />
            {/* Other components or content */}
        </div>
    );
}

export default App;
