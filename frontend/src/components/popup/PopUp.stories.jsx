// TEMPSettings.jsx
import React from 'react';
import PopUp from './PopUp';

export default {
  title: 'PopUp/PopUpComponent',
  component: PopUp,
};

// Template for your component makes it easier to create variations or configurations of your component.
const Template = (args) => <PopUp {...args} />;

// Story for your default view
export const DefaultPopUp = Template.bind({});
// Props can be passed into the default export to customize as needed
DefaultPopUp.args = {
  // props to pass to your Settings component, if any
};
