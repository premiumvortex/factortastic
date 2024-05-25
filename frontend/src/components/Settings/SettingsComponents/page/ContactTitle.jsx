import "../../../Settings/settings.css"
import '../../../../index.css';

export default function ContactTitle() {
  return (
    // secondary-text
    <div className='justify-center tutorial-text' style={{gap: '1%', paddingBottom: 50}}>
      <span style={{ color: 'var(--cyan)' }}>Get</span>
      <span style={{ color: 'var(--pink)' }}>In</span>
      <span style={{ color: 'var(--cyan)' }}>Touch</span>
    </div>
  );
}
