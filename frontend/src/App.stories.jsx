// TEMPSettings.jsx
import React from 'react';
import App from './App';

export default {
  title: 'App/AppComponent',
  component: App,
};

// Template for your component makes it easier to create variations or configurations of your component.
const Template = (args) => <App {...args} />;

// Story for your default view
export const DefaultApp = Template.bind({});
// Props can be passed into the default export to customize as needed
DefaultApp.args = {
  // props to pass to your Settings component, if any
};
