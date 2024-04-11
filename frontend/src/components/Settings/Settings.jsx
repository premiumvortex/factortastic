import React from 'react';
import { SoundProvider } from '../Sound/SoundContext';
import SoundComponent from '../Sound/SoundComponent';
import SoundSettings from "../Sound/SoundSettings"; // Import from second component
import SettingButton from '../button/SettingButton';
import MusicToggle from '../button/MusicToggle';
import SoundFxToggle from '../button/SoundFxToggle';
import BackButton from "../button/BackButton";
import KeyPage from '../../page/KeyPage';
import ContactUsPage from '../../page/ContactUsPage';

function CombinedSettings() {
return (
    <div>
        <ContactUsPage/>
    </div>
    );
}

export default CombinedSettings;
// {/*
// <div>
//        <KeyPage/>
//    </div>
// <SoundProvider>
//             <div className="App">
//                 <SoundComponent />
//                 <SoundSettings />  Integrated SoundSettings from the second component
//                 <div>
//                     <BackButton />
//                 </div>
//                 <div style={{
//                     maxWidth: 600,
//                     minWidth: 600,
//                     height: 600,
//                     padding: 10,
//                     margin: 'auto',
//                     borderRadius: 40,
//                     border: 'none',
//                     backgroundColor: '#516EBE'
//                 }}>
//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
//                         <h2 style={{ color: '#96FCFD', fontSize: 40, marginRight: '10px', textShadow: '5px 10px 6px rgba(0, 0, 0, .5)' }}>Game</h2>
//                         <h2 style={{ color: '#EE66C8', fontSize: 40, textShadow: '5px 10px 6px rgba(0, 0, 0, .5)' }}>Settings</h2>
//                     </div>
//                     <div style={{ padding: 'auto' }}>
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <div>
//                                 <h2 style={{ fontSize: 40 }}>Music:</h2>
//                             </div>
//                             <div style={{ paddingLeft: 40 }}>
//                                 <MusicToggle />
//                             </div>
//                         </div>
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <div>
//                                 <h2 style={{ fontSize: 40 }}>Sound Fx:</h2>
//                             </div>
//                             <div style={{ paddingLeft: 50, paddingRight: 50 }}>
//                                 <SoundFxToggle />
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ display: 'flex', marginTop: 50 }}>
//                         <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
//                             <SettingButton text={'Key'} />
//                             <SettingButton text={'Menu'} />
//                         </div>
//                         <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
//                             <SettingButton text={'Privacy Policy'} />
//                             <SettingButton text={'Contact Us'} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </SoundProvider>*/}
