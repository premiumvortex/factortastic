import Fox from '../../../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';
import Rainbow from '../../../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';
import Star from '../../../../assets/artwork/Individual_Assets/Characters/5-point-star.png';
import SettingButton from '../../../button/SettingButton.jsx';
import ThankYouChatacters from './ThankYouCharacters';
import ThankYouMsg from './ThankYouMsg';

export default function ThankYouPage({ giveThanks, setGiveThanks }) {

function handleBack() {
  setGiveThanks(!giveThanks);
};
  return (
    <>
    <div style={{marginTop: '5vh', backgroundColor: '#999'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ThankYouChatacters/>
        <ThankYouMsg/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5vh'}} >
        <div>
            <SettingButton onClick={handleBack} text={'Back'}/>
        </div>
      </div>
    </div>
    </>
  )
};
