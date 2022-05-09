import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './stylesupload';
import Icon from './Icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projeto/Icons',
  component: Icon

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Story: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Icons = Story.bind({});
Icons.args = {};
