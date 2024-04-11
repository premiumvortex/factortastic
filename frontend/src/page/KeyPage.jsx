import BackButton from "../components/button/BackButton";
import Key from "../assets/artwork/FC KEY.jpg";
import '../page/keyPage.css';

export default function KeyPage() {
  return (
    <>
      <div className="row">
        <div>
          <BackButton/>
        </div>
        <div className="key">
          <img src={Key} alt="Key" />
        </div>
      </div>
    </>
  );
}
