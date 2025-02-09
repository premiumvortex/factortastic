import React from "react";
import "../../index.css";
import { SettingLongButton } from "../SettingLongButton/SettingLongButton";


export default function FinishedTutorialPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '5vh 0',
      textAlign: 'center',
      color: 'white'
    }}>
      <div style={{ width: '100%' }}>
        <span style={{ color: 'var(--pink)', fontSize: '4vw' }} className="page-title">Let's </span>
        <span style={{ color: 'var(--cyan)', fontSize: '4vw' }} className="page-title">play</span>
      </div>
      <div style={{ width: '100%' }}>
        <span style={{ fontSize: '4vw' }} className="page-title">You're ready for our adventure!</span>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: '50%',
      }}>
        <SettingLongButton
          text="Continue"
          onClick={() => console.log("Button clicked")}
          isDisabled={false}
        />
      </div>
    </div>
  );
    }
