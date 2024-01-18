import React from "react";
import "./loading.css";
import { Loading } from "./Loading"; // Assuming you have this component

// Default export that describes the component
export default {
    title: 'Loading', // Title of the component in Storybook
    component: Loading, // The component itself
};

// Story for the Loading component
export const DefaultLoading = () => (
    <Loading />
);