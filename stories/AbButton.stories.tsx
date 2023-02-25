import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbButton, IAbButton } from '../src/components/AbButton';

export default {
  title: 'Components/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', text: 'Primário' } as IAbButton;

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', text: 'Secondário' } as IAbButton;
