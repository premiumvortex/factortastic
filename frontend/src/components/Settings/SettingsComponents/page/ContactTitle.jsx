import '../../../../index.css';

export default function ContactTitle() {
  return (
    <div className='tutorial-text' style={{display: 'flex', justifyContent: 'center', gap: '1%', paddingBottom: 50}}>
      <span style={{ color: 'var(--cyan)', fontSize: '4vw' }}>Get</span>
      <span style={{ color: 'var(--pink)', fontSize: '4vw' }}>In</span>
      <span style={{ color: 'var(--cyan)', fontSize: '4vw' }}>Touch</span>
    </div>
  );
}
