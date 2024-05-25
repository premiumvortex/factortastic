import React, {useState, useEffect} from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundSettings from "../Sound/SoundSettings"; // Import from second component
import BackButton from "../button/BackButton";
import './settings.css';
import KeyPage from './SettingsComponents/page/KeyPage';
import ContactUsPage from './SettingsComponents/page/ContactUsPage';
import SettingTitles from './SettingsComponents/SettingTitles.jsx';
import ActionKeys from "./SettingsComponents/ActionKeys.jsx";

function Settings({ handleClosePopup}) {
 const [currentPopUp, setCurrentPopUp] = useState(null);

 let changePopUp = (pageName) => {
    setCurrentPopUp(pageName);
  };

 const backToSettings = () => {
    setCurrentPopUp(null);
 }

return (
    <>
        <div style={{width: '100vw'}}>
            {currentPopUp === null && (<SoundProvider>
                    <div>
                        <BackButton onClick={handleClosePopup}/>
                    </div>
                    <div className="setting-content">
                        <div style={{marginTop: 40}}>
                            <SettingTitles />
                        </div>
                        <SoundSettings/>
                        <div style={{marginBottom: 35}}>
                            <ActionKeys changePage={changePopUp}/>
                        </div>
                    </div>
                </SoundProvider>
            )}
            {currentPopUp === 'Key' && <KeyPage changePage={changePopUp}/>}
            {currentPopUp === 'Contact Us' && <ContactUsPage changePage={changePopUp} />}
        </div>
    </>
);
}

export default Settings;
