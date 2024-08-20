import SettingsIcon from '@mui/icons-material/Settings';
import '../button/button.css';

export default function SettingsIconButton({onClick}) {
  return (
    <div className="setting-btn-icon-container">
      <SettingsIcon style={{ fontSize: 'inherit' }} onClick={onClick} className='setting-btn-icon'/>
    </div>
  )
}
