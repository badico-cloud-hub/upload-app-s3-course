import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from './box';
import './stylesupload';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projeto/ComponentBox',
  component: Box

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Story: ComponentStory<typeof Box> = args => <Box {...args} />;

export const Upload = Story.bind({});
Upload.args = {};
