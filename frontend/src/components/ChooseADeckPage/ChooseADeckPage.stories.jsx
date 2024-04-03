import React from "react";
import "./ChooseADeckPage.css";
import { ChooseADeckPage } from "./ChooseADeckPage"; // Assuming you have this component

// Default export that describes the component
export default {
    title: 'ChooseADeckPage', // Title of the component in Storybook
    component: ChooseADeckPage, // The component itself
};

// Story for the ChooseADeckPage component
export const DefaultChooseADeckPage = () => (
    <ChooseADeckPage />
);