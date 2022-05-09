/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './header.css';
import { Header } from './Header';

export default {
  title: 'Projeto/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>;

const Story: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Container = Story.bind({});
Container.args = {};
