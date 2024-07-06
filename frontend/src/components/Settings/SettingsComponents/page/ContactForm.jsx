import '../page/contactUs.css';
import '../../settings.css';
import EmailIcon from '@mui/icons-material/Email';
import Octipi from '../../../../assets/artwork/Individual_Assets/Characters/8-octopus.png';
import SettingButton from '../../../button/SettingButton.jsx';

export default function ContactForm({formData, handleChange, handleSubmit}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='justify-center' style={{ minWidth: '50rem', margin: '0 2rem' }}>
          <div>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '8%'}}>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div>
                    <label>First Name :</label>
                    <input placeholder='Enter your first name' type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <label>Email Address :</label>
                    <input placeholder='Enter your email address' type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Last Name :</label>
                    <input placeholder='Enter your last name' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <label>Phone Number :</label>
                    <input placeholder='Enter your phone number' type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div>
                <label>Message* :</label>
                <textarea required minLength={10} placeholder='Enter your message' className='message-box' name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
          <div style={{width: '50vh'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div className='flex justify-center'>
                <EmailIcon fontSize='large' />
                <p className='email-text'>email@example.com</p>
              </div>
              <div>
                <img className='octipi-img' src={Octipi} alt='Octipi' style={{ maxWidth: '25vw', minWidth: '10vw' }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{justifyContent: 'center', margin: '0 auto', width: '15rem'}}>
            <SettingButton type='submit' text={'Submit'} />
          </div>
        </div>
      </form>
    </>
  );
}
