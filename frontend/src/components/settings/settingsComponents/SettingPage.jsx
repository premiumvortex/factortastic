import React from 'react';
import "./SettingPage.css";
import SettingsButton from "./SettingsButton.jsx";
import BasicSwitches from "../../Switch.jsx";
import Switch from '@mui/material/Switch';



export const SettingPage = () => {
  return (

      <div className="GameSettings">
          <h1 class="Title">
              <span class="color1">Game </span>
              <span class="color2">Settings</span>
          </h1>

          <div className="MusicPort">
              <div>
                  <h1 className="MusicText">
                      Music
                  </h1>
              </div>
              <div className="MusicButton">
                  <Switch/>
              </div>

          </div>

          <div className="SoundPort">
              <h1 className="SoundText">
                  Sound
              </h1>
              <div className="SoundButton">
                  <Switch/>
              </div>
          </div>

          <div className="button-container">
              <SettingsButton className="button">Button 1</SettingsButton>
              <SettingsButton className="button">Button 2</SettingsButton>
              <SettingsButton className="button">Button 3</SettingsButton>
              <SettingsButton className="button">Button 4</SettingsButton>
          </div>

      </div>
  );
}

export default SettingPage;

