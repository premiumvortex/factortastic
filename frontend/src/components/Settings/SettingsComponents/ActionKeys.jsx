import SettingButton from '../../button/SettingButton';
import '../../../index.css'

function ActionKeys({ changePopUp }) {
    return (
        <div style={{
            display: 'grid',
            height: '100%',
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
                <SettingButton text={'Key'} onClick={() => changePopUp('Key')} />
            </div>
            {/* Second Column */}
            <div style={{ gridArea: 'secondColumn' }}>
                <SettingButton text={'Menu'} onClick={() => changePopUp('Home')} />
            </div>
            {/* Third Column */}
            <div style={{ gridArea: 'thirdColumn' }}>
                <SettingButton text={'Privacy Policy'} onClick={() => changePopUp('Privacy Policy')}/>
            </div>
            {/* Fourth Column */}
            <div style={{ gridArea: 'fourthColumn' }}>
                <SettingButton text={'Contact Us'} onClick={() => changePopUp('Contact Us')}/>
            </div>
            {/* Full width row */}
            <div style={{ gridArea: 'fullWidth' }}>
                <SettingButton text={'Tutorial'} onClick={() => alert('Nothing here yet!')}/>
            </div>
        </div>
    );
}

export default ActionKeys;
