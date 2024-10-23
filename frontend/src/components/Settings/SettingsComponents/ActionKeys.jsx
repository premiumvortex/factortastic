import SettingButton from '../../button/SettingButton';
import '../../../index.css'

function ActionKeys({ changePopUp }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', // Two equal columns
            gridTemplateRows: 'auto auto auto', // Three rows, height determined by content
            gridTemplateAreas: `
                'firstColumn secondColumn'
                'thirdColumn fourthColumn'
                'fullWidth fullWidth'
            `,
            gap: '1%',
            rowGap: '6%' // Space between grid items
        }}>
            {/* First Column */}
            <div style={{ gridArea: 'firstColumn' }}>
                <SettingButton text={'Key'} onClick={() => changePopUp('Key')} soundEffect={'click'}/>
            </div>
            {/* Second Column */}
            <div style={{ gridArea: 'secondColumn' }}>
                <SettingButton text={'Menu'} onClick={() => changePopUp('Home')} soundEffect={'click'}/>
            </div>
            {/* Third Column */}
            <div style={{ gridArea: 'thirdColumn' }}>
                <SettingButton text={'Privacy Policy'} onClick={() => changePopUp('Privacy Policy')} soundEffect={'click'}/>
            </div>
            {/* Fourth Column */}
            <div style={{ gridArea: 'fourthColumn' }}>
                <SettingButton text={'Contact Us'} onClick={() => changePopUp('Contact Us')} soundEffect={'click'}/>
            </div>
            {/* Full width row */}
            <div style={{ gridArea: 'fullWidth' }}>
                <SettingButton text={'Tutorial'} onClick={() => alert('Nothing here yet!')} soundEffect={'click'}/>
            </div>
        </div>
    );
}

export default ActionKeys;
