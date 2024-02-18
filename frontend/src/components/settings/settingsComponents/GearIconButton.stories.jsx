// DecksButton.stories.jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import GearIconButton from './GearIconButton.jsx';

export default {
  title: 'Components/GearIconButton',
  component: GearIconButton,
};

const Template = (args) => <GearIconButton {...args} />;

export const Default = () => <Template />;
