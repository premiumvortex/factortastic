import React, {useState} from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundComponent from '../Sound/SoundComponent';
import SoundSettings from "../Sound/SoundSettings"; // Import from second component
import SettingButton from '../button/SettingButton';
import MusicToggle from '../button/MusicToggle';
import SoundFxToggle from '../button/SoundFxToggle';
import BackButton from "../button/BackButton";
import '../Settings/settings.css';
import '../../../src/index.css';
import KeyPage from '../../page/KeyPage';
import ContactUsPage from '../../page/ContactUsPage';

function CombinedSettings({ handleClosePopup }) {
return (
    <>
        <div className='setting-container'>
            <SoundProvider>
                <div className="App">
                    <SoundComponent />
                    <SoundSettings />  {/* Integrated SoundSettings from the second component */}
                    <div>
                        <BackButton onClick={handleClosePopup} />
                    </div>
                    <div className='setting-content'>
                        <div className='setting-title padding-top-20 padding-bottom-40'>
                            <div className='tutorial-text'>Game</div>
                            <div className='tutorial-text text-pink'>Settings</div>
                        </div>
                        <div className='row justify-center padding-top-20 padding-bottom-40'>
                            <div className='column-half sound-labels'>
                                <div className='padding-bottom-40'>Music:</div>
                                <div className=''>SoundFx:</div>
                            </div>
                            <div className='column-half flex-column space-between padding-left-30 margin-top-20'>
                                <MusicToggle />
                                <SoundFxToggle />
                            </div>
                        </div>
                        <div className='row justify-center padding-top-40'>
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
