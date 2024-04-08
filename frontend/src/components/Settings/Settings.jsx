import React from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundComponent from '../Sound/SoundComponent';
import SoundSettings from "../Sound/SoundSettings.jsx";

function Settings() {
    return (
        <SoundProvider>
            <div className="App">
                <SoundComponent />
                <SoundSettings />
                {/* The rest of your app components */}
            </div>
        </SoundProvider>
    );
}

export default Settings;
