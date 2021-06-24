import React from 'react';

import App from '.';

export default {
  title: 'Common Components/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <App {...args} />;

export const ReadyStatus = Template.bind({});
