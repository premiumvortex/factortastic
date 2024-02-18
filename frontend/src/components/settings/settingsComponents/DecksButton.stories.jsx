// DecksButton.stories.jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import DecksButton from './DecksButton';

export default {
  title: 'Components/DecksButton',
  component: DecksButton,
};

const Template = (args) => <DecksButton {...args} />;

export const Default = () => <Template />;
