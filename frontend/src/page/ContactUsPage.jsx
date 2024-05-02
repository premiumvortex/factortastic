import BackButton from '../components/button/BackButton';
import '../page/contactUs.css';
import EmailIcon from '@mui/icons-material/Email';
import Octipi from '../assets/artwork/Individual_Assets/Characters/8-octopus.png';

export default function ContactUsPage({ changePage }) {
  return (
    <>
      <div className='row'>
        <div className='align-center'>
          <BackButton onClick={() => changePage(null)} />
        </div>
        <div className='title'>
          {/* <h2>Get</h2>
          <h2 className='text-pink'>In</h2>
          <h2>Touch</h2> */}
          <div className='tutorial-text text-cyan'>Get</div>
          <div className='tutorial-text text-pink padding-left-20'>In</div>
          <div className='tutorial-text text-cyan padding-left-20'>Touch</div>
        </div>
      </div>
      <div className='row contact-content'>
        <form>
          <div className='row justify-center'>
            <div className='column-half'>
              <div className='row flex-column margin-bottom-20'>
                <div className='column-half block'>
                  <div className='row space-between'>
                    <div className='column-half block'>
                      <label>First Name :</label>
                      <input type="text" />
                      <label>Email Address :</label>
                      <input type="text" />
                    </div>
                    <div className='column-half block'>
                      <label>Last Name :</label>
                      <input type="text"/>
                      <label>Phone Number :</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className='column-half block'>
                  <label>Message* :</label>
                  <input className='message-box' type="textbox" />
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
                  <img className='octipi-img' src={Octipi} alt='Octipi'/>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='column-full submit'>
              <button className='setting-long-button' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
