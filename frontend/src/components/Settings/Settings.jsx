import React, {useState, useEffect} from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundSettings from "../Sound/SoundSettings";
import BackButton from "../button/BackButton";
import './settings.css';
import KeyPage from './SettingsComponents/page/KeyPage';
import ContactUsPage from './SettingsComponents/page/ContactUsPage';
import SettingTitles from './SettingsComponents/SettingTitles.jsx';
import ActionKeys from "./SettingsComponents/ActionKeys.jsx";
import {PrivacyPolicyPage} from "../PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import { HomePage } from "../HomePage/HomePage.jsx";
import "../../index.css"


export default function Settings({ handleClosePopup }) {
 const [currentPopUp, setCurrentPopUp] = useState(null);

 let changePopUp = (pageName) => {
    setCurrentPopUp(pageName);
  };

 const backToSettings = () => {
    setCurrentPopUp(null);
 }

    return (
        <SoundProvider>
            <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                {currentPopUp === null && (
                    <BackButton onClick={handleClosePopup} soundEffect={'click'} />
                )}

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {currentPopUp === null && (
                        <div className="setting-content secondary">
                            <div style={{ marginTop: 40 }}>
                                <SettingTitles />
                            </div>

                            <SoundSettings />

                            <div style={{ marginBottom: 40 }}>
                                <ActionKeys changePopUp={changePopUp} />
                            </div>
                        </div>
                    )}
                    {currentPopUp === 'Key' && <KeyPage changePopUp={changePopUp} />}
                    {currentPopUp === 'Contact Us' && <ContactUsPage changePopUp={changePopUp} />}
                    {currentPopUp === 'Privacy Policy' && (
                        <PrivacyPolicyPage
                            changePopUp={changePopUp}
                            requireScroll={false}
                            closePrivacyPolicy={backToSettings}
                        />
                    )}
                    {currentPopUp === 'Home' && <HomePage />}
                </div>
            </div>
        </SoundProvider>
    );
}
