import React, {useState} from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundComponent from '../Sound/SoundComponent';
import SoundSettings from "../Sound/SoundSettings"; // Import from second component
import SettingButton from '../button/SettingButton';
import MusicToggle from '../button/MusicToggle';
import SoundFxToggle from '../button/SoundFxToggle';
import BackButton from "../button/BackButton";
import '../Settings/settings.css';
// import KeyPage from '../../page/KeyPage';
// import ContactUsPage from '../../page/ContactUsPage';

function CombinedSettings() {
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
        setShowPopup(false);
    };
return (
    <>
     <div className={`popup-container ${showPopup ? '' : 'hide'}`}>
            <SoundProvider>
                <div className="App">
                    <SoundComponent />
                    <SoundSettings />  {/* Integrated SoundSettings from the second component */}
                    <div>
                        <BackButton onClick={handleClosePopup} />
                    </div>
                    <div className='setting-content'>
                        <div className='setting-title padding-bottom'>
                            <h2>Game</h2>
                            <h2 className='pink'>Settings</h2>
                        </div>
                        <div className='row justify-center padding-bottom'>
                            <div className='column-half sound-labels'>
                                <h2>Music:</h2>
                                <h2>SoundFx:</h2>
                            </div>
                            <div className='column-half flex-column space-evenly padding-left-30'>
                                <MusicToggle />
                                <SoundFxToggle />
                            </div>
                        </div>
                        <div className='row justify-center'>
                            <div className='column-half flex flex-column'>
                                <SettingButton text={'Key'} />
                                <SettingButton text={'Menu'} />
                            </div>
                            <div className='column-half flex flex-column'>
                                <SettingButton text={'Privacy Policy'} />
                                <SettingButton text={'Contact Us'} />
                            </div>
                        </div>
                    </div>
                </div>
            </SoundProvider>
    </div>
    </>
    );
}

export default CombinedSettings;
