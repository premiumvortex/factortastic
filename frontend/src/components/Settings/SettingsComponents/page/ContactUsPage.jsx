import React, {useState} from 'react';
import BackButton from '../../../button/BackButton.jsx';
import ThankYouPage from './ThankYouPage.jsx';
import ContactTitle from './ContactTitle.jsx';
import ContactForm from './ContactForm.jsx';

export default function ContactUsPage({ changePopUp }) {
  const [giveThanks, setGiveThanks] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(e) {
  e.preventDefault();
  console.log('Form Data:', formData);
  // Convert formData to JSON
  const jsonFormData = JSON.stringify(formData);

  // You can do further processing here, such as sending the form data to backend


  // Resets the form after the submition is handled
    setFormData({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      message: ''
    });
    setGiveThanks(!giveThanks);
  };

  return (
    <>
    {!giveThanks && (
    <div style={{alignContent: 'center'}}>
      <div style={{display: 'flex'}} >
            <BackButton onClick={() => changePopUp(null)} soundEffect={'click'} />
      </div>
        <ContactTitle/>
        <div>
          <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    </div>
    )}
    {giveThanks && <ThankYouPage changePopUp={changePopUp} setGiveThanks={setGiveThanks} />}
    </>
  );
}
