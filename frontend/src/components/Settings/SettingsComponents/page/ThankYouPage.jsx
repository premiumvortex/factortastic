import Fox from '../../../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';
import Rainbow from '../../../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';
import Star from '../../../../assets/artwork/Individual_Assets/Characters/5-point-star.png';
import '../../settings.css';
import '../../../../index.css';
import './thankYou.css';
import SettingButton from '../../../button/SettingButton.jsx';
import ThankYouChatacters from './ThankYouCharacters';
import ThankYouMsg from './ThankYouMsg';

export default function ThankYouPage({ giveThanks, setGiveThanks }) {

function handleBack() {
  setGiveThanks(!giveThanks);
};
  return (
    <>
    <div className='thank-you-content'>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ThankYouChatacters/>
        <ThankYouMsg/>
      </div>
      <div className='row justify-center pad-top-50'>
        <div className='column-full pad-top-50'>
            <SettingButton onClick={handleBack} text={'Back'}/>
        </div>
      </div>
    </div>
    </>
  )
};
