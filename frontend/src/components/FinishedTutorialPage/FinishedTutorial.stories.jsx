import React from "react";
import FinishedTutorialPage from "./FinishedTutorialPage";

export default {
  title: 'FinishedTutorialPage/FinishedTutorialPage',
  component: FinishedTutorialPage,
};

// Template for your component makes it easier to create variations or configurations of your component.
const Template = (args) => <FinishedTutorialPage {...args} />;

// Story for your default view
export const DefaultFinishedTutorial = Template.bind({});
// Props can be passed into the default export to customize as needed
DefaultFinishedTutorial.args = {
// props to pass to your Settings component, if any
};

// export const DefaultFinishedTutorial = () => (
//   <FinishedTutorialPage />
// );
