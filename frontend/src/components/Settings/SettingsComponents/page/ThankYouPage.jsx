import Fox from '../../../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';
import Rainbow from '../../../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';
import Star from '../../../../assets/artwork/Individual_Assets/Characters/5-point-star.png';
import '../../settings.css';
import '../../../../index.css';
import './thankYou.css';
import SettingButton from '../../../button/SettingButton.jsx';

export default function ThankYouPage({ giveThanks, setGiveThanks }) {

function handleBack() {
  setGiveThanks(!giveThanks);
};
  return (
    <>
    <div className='thank-you-content'>
      <div className='row flex-column'>
        <div className='column-half justify-center'>
            <img src={Fox} className='TY-characters' alt='fox'/>
            <img src={Rainbow} className='TY-characters' alt='rainbow'/>
            <img src={Star} className='TY-characters' alt='star'/>
        </div>
        <div className='column-half TY-msg padding-top-20'>
          <div className='tutorial-text justify-center'>Thank you for your message!</div>
          <div className='tutorial-text justify-center'>You will hear from us within 7 days.</div>
        </div>
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
