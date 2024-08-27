import SettingButton from '../../../button/SettingButton.jsx';
import ThankYouChatacters from './ThankYouCharacters';
import ThankYouMsg from './ThankYouMsg';

export default function ThankYouPage({ changePopUp, setGiveThanks, giveThanks }) {
function handleBack() {
  setGiveThanks(!giveThanks);
  changePopUp(null);
};
  return (
    <>
    <div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ThankYouChatacters/>
        <ThankYouMsg/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}} >
        <div style={{ justifyContent: 'center', margin: '0 auto', width: '15rem' }}>
            <SettingButton onClick={handleBack} text={'Back'}/>
        </div>
      </div>
    </div>
    </>
  )
};
