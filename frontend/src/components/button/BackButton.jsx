import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../components/button/button.css';

export default function BackButton({ onClick }) {
  return (
    <>
      <button className='back-button' onClick={onClick}>
      <ArrowBackIcon fontSize="large" />
    </button>
   </>
  );
};
