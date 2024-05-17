import BackButton from "../../../button/BackButton.jsx";
import Key from "../../../../assets/artwork/FC KEY.jpg";
import './keyPage.css';

export default function KeyPage({ changePage }) {
  return (
    <>
      <div className="row">
        <div>
          <BackButton onClick={() => changePage(null)}/>
        </div>
        <div className="key">
          <img className="key-image" src={Key} alt="Key" />
        </div>
      </div>
    </>
  );
}
