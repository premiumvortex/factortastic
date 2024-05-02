import '../button/button.css';

export default function SettingButton({text, onClick}) {
  return (
    <button className="setting-long-button" onClick={onClick}>
      {text}
    </button>
  )
}
