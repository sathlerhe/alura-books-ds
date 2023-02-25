import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbButton } from '../src/components/AbButton';

export default {
  title: 'Components/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = () => <AbButton />;

export const Primary = Template.bind({});