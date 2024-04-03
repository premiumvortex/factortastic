import React from "react";
import "./SettingLongButton.css";
import { SettingLongButton } from "./SettingLongButton"; // Assuming you have this component

// Default export that describes the component
export default {
    title: 'SettingLongButton', // Title of the component in Storybook
    component: SettingLongButton, // The component itself
};

// Story for the SettingLongButton component
export const DefaultSettingLongButton = () => (
    <SettingLongButton />
);