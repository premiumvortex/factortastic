// TEMPSettings.jsx
import React from 'react';
import App from './App';
import { SoundProvider } from './components/Sound/SoundContext';

export default {
  title: 'App/AppComponent',
  component: App,
};

// Template for your component makes it easier to create variations or configurations of your component.
const Template = (args) => (
    <SoundProvider> {/* Wrap App in SoundProvider for consistent context usage */}
      <App {...args} />
    </SoundProvider>
);

// Story for your default view
export const DefaultApp = Template.bind({});
// Props can be passed into the default export to customize as needed
DefaultApp.args = {
  // props to pass to your App component, if any
};
