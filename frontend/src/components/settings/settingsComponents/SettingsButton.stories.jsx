// SettingsButton.stories.js
import React from 'react';
import SettingsButton from './SettingsButton.jsx';

export default {
  title: 'Components/SettingsButton',
  component: SettingsButton,
};

const Template = (args) => <SettingsButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
