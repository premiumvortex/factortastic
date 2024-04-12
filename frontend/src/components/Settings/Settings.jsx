import React from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundComponent from '../Sound/SoundComponent';
import SoundSettings from "../Sound/SoundSettings"; // Import from second component
import SettingButton from '../button/SettingButton';
import MusicToggle from '../button/MusicToggle';
import SoundFxToggle from '../button/SoundFxToggle';
import BackButton from "../button/BackButton";
// import KeyPage from '../../page/KeyPage';
// import ContactUsPage from '../../page/ContactUsPage';
import '../Settings/settings.css';

// Add in KeyPage and ContactUsPage components
function CombinedSettings() {
return (
    <>
        <SoundProvider>
            <div className="App">
                <SoundComponent />
                <SoundSettings />  {/* Integrated SoundSettings from the second component */}
                <div>
                    <BackButton />
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
                        <div className='column-half flex flex-column space-evenly'>
                            <MusicToggle/>
                            <SoundFxToggle/>
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
    </>
    );
}

export default CombinedSettings;
