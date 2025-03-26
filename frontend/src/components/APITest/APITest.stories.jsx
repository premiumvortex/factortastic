import React from 'react';
import APITest from './APITest';

export default {
    title: 'APITest',
    component: APITest,
};

const Template = (args) => <APITest {...args} />;

export const Default = Template.bind({});
Default.args = {};
