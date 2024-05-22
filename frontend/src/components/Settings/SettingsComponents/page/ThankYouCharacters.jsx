import Fox from '../../../../assets/artwork/Individual_Assets/Characters/9-tail-fox.png';
import Rainbow from '../../../../assets/artwork/Individual_Assets/Characters/7-rainbow.png';
import Star from '../../../../assets/artwork/Individual_Assets/Characters/5-point-star.png';

export default function ThankYouChatacters() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={Fox} style={{width: '35%'}} alt='fox' />
        <img src={Rainbow} style={{ width: '35%'}} alt='rainbow' />
        <img src={Star} style={{ width: '35%', transform: 'rotate(0.04turn)' }} alt='star' />
      </div>
    </>
  );
}
