import BackButton from "../components/button/BackButton";
import Key from "../assets/artwork/FC KEY.jpg";

export default function KeyPage() {
  return (
    <>
    <div>
        <BackButton />
      </div>
      <div>
        <img src={Key} alt="Key"/>
      </div>
    </>
  );
}
