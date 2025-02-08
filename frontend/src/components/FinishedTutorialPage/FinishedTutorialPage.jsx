import React from "react";
import "../../index.css";
import { SettingLongButton } from "../SettingLongButton/SettingLongButton";

export default function FinishedTutorialPage() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center', //ensures items are centered horiz.
      justifyContent: 'space-evenly',  //distributes items evenly
      height: '100vh',
      color: 'white',
      textAlign: 'center'
      }}>
      <div style={{ padding: '5vh 0', fontSize: '5vh' }}>Let's play</div>
      <div style={{ padding: '5vh 0', fontSize: '5vh' }}>You're ready for our adventure!</div>
      <div style={{}}>
        <SettingLongButton
        text="Continue"
          onClick={() => console.log("Button clicked")}
          isDisabled={false}
          />
        </div>
</div>
  );
}
