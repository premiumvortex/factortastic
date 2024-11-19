import React from 'react';
import { TextField, Button, Box, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';
import Octipi from '../../../../assets/artwork/Individual_Assets/Characters/8-octopus.png';
import SettingButton from '../../../button/SettingButton.jsx';
import '../page/contactUs.css';
import '../../settings.css';

const StyledTextField = styled(TextField)({
  marginBottom: '2vh',
  '& .MuiInputBase-root': {
    backgroundColor: '#ffffff',
    height: '10vh',
    color: 'black', // Ensures user input text remains black or your desired color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc', // Default border color
    },
    '&:hover fieldset': {
      borderColor: 'var(--pink)', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--cyan)', // Border color when focused
    },
    '&.Mui-focused': {
      boxShadow: '0 0 10px 2px var(--cyan)', // Cyan drop shadow when focused
    },
  },
  '& .MuiInputLabel-root': {
    color: 'var(--pink)', // Default label color
    fontWeight: 'bold', // Makes the label bold when focused
    fontSize: '1.1rem', // Increases font size when focused
    '&.Mui-focused': {
      color: 'var(--pink)', // Label color when focused
      fontWeight: 'bold', // Makes the label bold when focused
      fontSize: '1.3rem', // Increases font size when focused
    },
  },
  '& .MuiFormHelperText-root': {
    color: 'var(--pink)', // Applies to helper text if present
  },
  '& .MuiInputAdornment-root': {
    color: 'var(--pink)', // Applies to adornments (e.g., icons inside inputs)
  },
});

export default function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:"column", height: '70vh'}}>
        <Box display='flex' justifyContent='space-evenly'>
          <Box display="flex" flexDirection="column" sx={{ width: '50vw', justifyContent:'center'}}>
            <Box display="flex" width="50vw"  mb={4}>
              <Box flex={1} mr={2}>
                <StyledTextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                />
                <StyledTextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                />
              </Box>
              <Box flex={1} ml={2}>
                <StyledTextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                />
                <StyledTextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
              </Box>
            </Box>
            <StyledTextField
                label="Message"
                variant="outlined"
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                multiline
                required
                minRows={4}
                sx={{
                  height: '20vh', // Doubling the height compared to other input boxes
                  overflow: 'hidden', // Ensure overflow is not visible
                  '& .MuiInputBase-root': {
                    height: '100%', // Ensure the input container fills the specified height
                  }
                }}
            />
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" mt={4} mb={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton>
                <EmailIcon fontSize="large" style={{ color: 'white' }} />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'white', marginLeft: '8px' }}>
                email@example.com
              </Typography>
            </Box>
            <img src={Octipi} alt="Octipi" style={{ height: '25vw' }} />
          </Box>

        </Box>

        <div style={{justifyContent: 'center', margin: '0 auto', width: '15rem'}}>
          <SettingButton type='submit' text={'Submit'}/>
        </div>
      </form>
  );
}
