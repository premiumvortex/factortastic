import React from "react";
import "./HomePage.css";
import { HomePage } from "./HomePage";

// Default export that describes the component
export default {
    title: 'HomePage', // Title of the component in Storybook
    component: HomePage, // The component itself
};

// Story for the HomePage component
export const DefaultHomePage = () => (
    <HomePage />
);