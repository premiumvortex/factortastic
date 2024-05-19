import Fox from '../../../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';
import Rainbow from '../../../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';
import Star from '../../../../assets/artwork/Individual_Assets/Characters/5-point-star.png';
import './thankYou.css';

export default function ThankYouChatacters() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={Fox} className='TY-characters' alt='fox' />
          <img src={Rainbow} className='TY-characters' alt='rainbow' />
          <img src={Star} className='TY-characters' alt='star' />
        </div>
    </>
  );
}
