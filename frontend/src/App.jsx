import React, { useState } from 'react';
import { SoundProvider } from './components/Sound/SoundContext';
import { Loading } from './components/Loading';
import { HomePage } from './components/HomePage/HomePage';
import PopUp from './components/popup/PopUp';
import Settings from './components/Settings/Settings.jsx';
import SettingsIconButton from './components/button/SettingIconButton';

export default function App() {
    const [anchor, setAnchor] = useState(null);
    const [loadingComplete, setLoadingComplete] = useState(false); // Manage loading state
    const [activeComponent, setActiveComponent] = useState('home'); // Control active view

    const handleOpenSettings = (event) => {
        setAnchor(event.currentTarget);
        setActiveComponent('settings'); // Switch to settings view
    };

    const handleClosePopup = () => {
        setAnchor(null);
        setActiveComponent('home'); // Switch back to home
    };

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <SoundProvider>
            {!loadingComplete ? (
                <Loading onDone={handleLoadingComplete} />
            ) : (
                <div>
                    {activeComponent === 'home' && (
                        <>
                            <div style={{ position: 'absolute', top: '3vh', right: '3vw', zIndex: 999 }}>
                                <SettingsIconButton onClick={handleOpenSettings} />
                            </div>
                            <HomePage />
                        </>
                    )}
                    {activeComponent === 'settings' && (
                        <PopUp
                            Component={Settings}
                            componentProps={{ handleClosePopup }}
                            anchor={anchor}
                            setAnchor={setAnchor}
                        />
                    )}
                </div>
            )}
        </SoundProvider>
    );
}
