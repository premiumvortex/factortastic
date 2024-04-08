import React, { useState } from "react";
import SettingButton from '../button/SettingButton';
import MusicToggle from '../button/MusicToggle';
import SoundFxToggle from '../button/SoundFxToggle';
import BackButton from "../button/BackButton";
//import backgroundImage from '../../assets/artwork/Individual_Assets/Game_Background.PNG';

export default function Settings() {
  return (
    <>
      {/* <div style={{
        position: 'relative', // Required for positioning the background image
        width: '100vw', // Adjust to cover the entire viewport width
        height: '100vh', // Adjust to cover the entire viewport height
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Adjust to cover the entire container
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'relative', // Required for positioning the settings panel and back button
          maxWidth: 600,
          minWidth: 600,
          height: 600,
          padding: 10,
          margin: 'auto',
          borderRadius: 40,
          border: 'none',
          backgroundColor: '#516EBE',
          zIndex: 1, // Ensure the settings panel and back button appear above the background image
          opacity: 0.9, // Adjust the opacity of the settings panel if needed
        }}>
          <div>
            <BackButton />
          </div> */}
      <div>
        <BackButton />
      </div>
      <div style={{
        maxWidth: 600,
        minWidth: 600,
        height: 600,
        padding: 10,
        margin: 'auto',
        borderRadius: 40,
        border: 'none',
        backgroundColor: '#516EBE'
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <h2 style={{ color: '#96FCFD', fontSize: 40, marginRight: '10px', textShadow: '5px 10px 6px rgba(0, 0, 0, .5)' }}>Game</h2>
          <h2 style={{ color: '#EE66C8', fontSize: 40, textShadow: '5px 10px 6px rgba(0, 0, 0, .5)' }}>Settings</h2>
        </div>
        <div style={{ padding: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <h2 style={{ fontSize: 40 }}>Music:</h2>
            </div>
            <div style={{ paddingLeft: 40 }}>
              <MusicToggle />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <h2 style={{ fontSize: 40 }}>Sound Fx:</h2>
            </div>
            <div style={{ paddingLeft: 50, paddingRight: 50 }}>
              <SoundFxToggle />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 50 }}>
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
            <SettingButton text={'Key'} />
            <SettingButton text={'Menu'} />
          </div>
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
            <SettingButton text={'Privacy Policy'} />
            <SettingButton text={'Contact Us'} />
          </div>
        </div>
      </div>

    </>
  )
}
