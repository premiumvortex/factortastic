import BackButton from "../../../button/BackButton.jsx";
import Key from "../../../../assets/artwork/FC KEY.jpg";

export default function KeyPage({ changePage }) {
  return (
    <>
      <div style={{display: 'flex'}}>
        <div>
          <BackButton onClick={() => changePage(null)}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
          <img style={{width: '80%'}} src={Key} alt="Key" />
        </div>
      </div>
    </>
  );
}
