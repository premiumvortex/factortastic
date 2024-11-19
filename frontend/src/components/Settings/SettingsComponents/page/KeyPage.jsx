import BackButton from "../../../button/BackButton.jsx";
import Key from "../../../../assets/artwork/FC KEY.jpg";

export default function KeyPage({ changePopUp }) {
  return (
      <>
          <div style={{position: 'fixed', width: '100vw', height: '100vh'}}>
              <BackButton onClick={() => changePopUp(null)} soundEffect={'click'}/>
          </div>

          <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh'
        }}>
          <img style={{maxWidth: '80vw', maxHeight: '90vh'}} src={Key} alt="Key Card"/>
        </div>
      </>
  );
}
