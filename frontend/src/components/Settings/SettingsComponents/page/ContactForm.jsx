import '../page/contactUs.css';
import '../../settings.css';
import EmailIcon from '@mui/icons-material/Email';
import Octipi from '../../../../assets/artwork/Individual_Assets/Characters/8-octopus.png';
import SettingButton from '../../../button/SettingButton.jsx';

export default function ContactForm({formData, handleChange, handleSubmit}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='justify-center'>
          <div>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '8%'}}>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div>
                    <label>First Name :</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <label>Email Address :</label>
                    <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Last Name :</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <label>Phone Number :</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div>
                <label>Message* :</label>
                <textarea className='message-box' name="message" value={formData.message} onChange={handleChange}></textarea>
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
                <img className='octipi-img' src={Octipi} alt='Octipi' />
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div className='submit'>
            <SettingButton type='submit' text={'Submit'} />
          </div>
        </div>
      </form>
    </>
  );
}
