import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Loading } from "./components/Loading.jsx";
import RandomPlacer from './components/RandomPlacer'; // Adjust the import path based on your file structure
import Settings from './components/Settings/Settings';
function App() {
    const [loadingDone, setLoadingDone] = useState(false);

    const handleLoadingDone = () => {
        setLoadingDone(true);
    };

    if (!loadingDone) {
        return <Loading onDone={handleLoadingDone} />;
    }

    return (
        <div>
            {/* The content that should be displayed after the loading screen */}
            <h1>Welcome to the app!</h1>
            <RandomPlacer />
            <img src={reactLogo} alt="React logo" />
            <img src={viteLogo} alt="Vite logo" />
            {/* Other components or content */}
        </div>
    );
}

export default App;
