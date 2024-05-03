import React, {useState, useEffect} from 'react';
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

function Settings({ handleClosePopup}) {
 const [currentPage, setCurrentPage] = useState(null);

 let changePage = (pageName) => {
    setCurrentPage(pageName);
  };

 const backToSettings = () => {
    setCurrentPage(null);
 }

return (
<>
    <div className='popup-container'>
        {currentPage === null && (<SoundProvider>
            <div className="App">
                <SoundComponent />
                <SoundSettings />
                <div>
                    <BackButton onClick={handleClosePopup}/>
                </div>
                <div className='setting-content'>
                    <div className='setting-title padding-top-20 padding-bottom-40'>
                        <div className='tutorial-text text-cyan'>Game</div>
                        <div className='tutorial-text text-pink padding-left-20'>Settings</div>
                    </div>
                    <div className='row justify-center padding-top-20 padding-bottom-40'>
                        <div className='column-half sound-labels'>
                            <div className='text-black padding-bottom-40'>Music:</div>
                            <div className='text-black'>SoundFx:</div>
                        </div>
                        <div className='column-half flex-column space-between padding-left-20 margin-top-20'>
                            <MusicToggle />
                            <SoundFxToggle />
                        </div>
                    </div>
                    <div className='row justify-center padding-top-40'>
                        <div className='column-half flex flex-column'>
                            <SettingButton text={'Key'} onClick={() => changePage('Key')} />
                            <SettingButton text={'Menu'} onClick={() => alert('Nothing here yet!')}/>
                        </div>
                        <div className='column-half flex flex-column'>
                                <SettingButton text={'Privacy Policy'} onClick={() => alert('Nothing here yet!')} />
                            <SettingButton text={'Contact Us'} onClick={() => changePage('Contact Us')}/>
                        </div>
                    </div>
                </div>
            </div>
        </SoundProvider>
        )}
        {currentPage === 'Key' && <KeyPage changePage={changePage}/>}
        {currentPage === 'Contact Us' && <ContactUsPage changePage={changePage} />}
    </div>
</>
);
}

export default Settings;
