import React from "react";
import TutorialPage from "./TutorialPage";

export default {
  title: 'TutorialPage/TutorialPage',
  component: TutorialPage,
};

// Template for your component makes it easier to create variations or configurations of your component.
const Template = (args) => <TutorialPage {...args} />;

// Story for your default view
export const DefaultTutorial = Template.bind({});
// Props can be passed into the default export to customize as needed
DefaultTutorial.args = {
  // props to pass to your Settings component, if any
};
