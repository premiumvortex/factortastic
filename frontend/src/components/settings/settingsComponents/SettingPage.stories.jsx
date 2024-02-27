import React from "react";
import SettingPage from "./SettingPage"; // Assuming you have this component

// Default export that describes the component
export default {
    title: 'SettingPage', // Title of the component in Storybook
    component: SettingPage, // The component itself
};

// Story for the SettingPage component
export const DefaultSettingPage = () => (
    <SettingPage />
);
