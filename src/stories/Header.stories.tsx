import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './styles';
import Header from '../Components/Header';

export default {
  title: 'Example/Header',
  component: Container,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
