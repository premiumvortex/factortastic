import '../page/contactUs.css';
import EmailIcon from '@mui/icons-material/Email';
import Octipi from '../../../../assets/artwork/Individual_Assets/Characters/8-octopus.png';
import SettingButton from '../../../button/SettingButton.jsx';

export default function ContactForm({formData, handleChange, handleSubmit}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row justify-center'>
          <div className='column-half'>
            <div className='row flex-column margin-bottom-20'>
              <div className='column-half block'>
                <div className='row space-between'>
                  <div className='column-half block'>
                    <label>First Name :</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <label>Email Address :</label>
                    <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                  </div>
                  <div className='column-half block'>
                    <label>Last Name :</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <label>Phone Number :</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className='column-half block'>
                <label>Message* :</label>
                <textarea className='message-box' name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
          <div className='column-half width-300'>
            <div className='row flex-column'>
              <div className='column-half flex justify-center'>
                <EmailIcon fontSize='large' />
                <p className='email-text'>email@example.com</p>
              </div>
              <div className='column-half'>
                <img className='octipi-img' src={Octipi} alt='Octipi' />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column-full submit'>
            <SettingButton type='submit' text={'Submit'} />
          </div>
        </div>
      </form>
    </>
  );
}
