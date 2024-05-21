import SettingsIcon from '@mui/icons-material/Settings';
import '../button/button.css';

export default function SettingsIconButton({onClick}) {
  return (
    <SettingsIcon onClick={onClick} style={{ fontSize: 80}} className='setting-btn-icon'/>
  )
}
