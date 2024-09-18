import SettingButton from '../../button/SettingButton';
import '../../../index.css';

function ActionKeys({ changePopUp }) {
    return (
        <div className="action-keys-container" style={{ width: '100%' }}>
            {/* First row with two columns */}
            <div className="action-keys-row"  id="row-1" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3vh' }}>
                <div className="action-key" id="first-column" style={{ flex: 1, marginRight: '.5rem' }}>
                    <SettingButton text={'Key'} onClick={() => changePopUp('Key')} />
                </div>
                <div className="action-key" id="second-column" style={{ flex: 1, marginLeft: '.5rem' }}>
                    <SettingButton text={'Menu'} onClick={() => changePopUp('Home')} />
                </div>
            </div>

            {/* Second row with two columns */}
            <div className="action-keys-row" id="row-2" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3vh' }}>
                <div className="action-key" id="third-column" style={{ flex: 1, marginRight: '.5rem' }}>
                    <SettingButton text={'Privacy Policy'} onClick={() => changePopUp('Privacy Policy')} />
                </div>
                <div className="action-key" id="fourth-column" style={{ flex: 1, marginLeft: '.5rem' }}>
                    <SettingButton text={'Contact Us'} onClick={() => changePopUp('Contact Us')} />
                </div>
            </div>

            {/* Full width row */}
            <div className="action-keys-row" id="row-3" style={{ width: '100%', textAlign: 'center' }}>
                <div className="action-key" id="full-width-column" style={{ width: '100%' }}>
                    <SettingButton text={'Tutorial'} onClick={() => alert('Nothing here yet!')} />
                </div>
            </div>
        </div>
    );
}

export default ActionKeys;
