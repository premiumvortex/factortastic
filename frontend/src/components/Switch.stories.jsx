import React from 'react';
import BasicSwitches from './Switch.jsx'; // Correct the path

export default {
    title: 'YourApp/Switch', // Adjust this path as needed for your Storybook organization
    component: BasicSwitches,
};

const Template = (args) => <BasicSwitches {...args} />;

export const Default = Template.bind({});