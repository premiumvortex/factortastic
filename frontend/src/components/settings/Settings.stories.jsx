// Settings.stories.jsx
import React from 'react';
import Settings from './Settings';

export default {
  title: 'Settings/SettingsComponent',
  component: Settings,
};

// Template for your component makes it easier to create variations or configurations of your component.
const Template = (args) => <Settings {...args} />;

// Story for your default view
export const DefaultSettings = Template.bind({});
// Props can be passed into the default export to customize as needed
DefaultSettings.args = {
  // props to pass to your Settings component, if any
};
