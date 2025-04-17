import React from 'react';
import { HomeTab } from '../components/tabs/HomeTab';

export default {
  title: 'Tabs/HomeTab',
  component: HomeTab,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HomeTab {...args} />;

export const Default = Template.bind({});
Default.args = {}; 