import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Upload from './upload';
import './stylesupload';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projeto/upload',
  component: upload

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof s>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Story: ComponentStory<typeof Upload> = args => <Upload {...args} />;

export const Uploads = Story.bind({});
uploads.args = {};
