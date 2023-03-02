import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { AbTextField, IAbTextField } from '../src/components/AbTextField';

export default {
  title: 'Components/AbTextField',
  component: AbTextField,
} as ComponentMeta<typeof AbTextField>;

const Template: ComponentStory<typeof AbTextField> = args => {
  return <AbTextField {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'email',
  label: 'E-mail',
  placeholder: 'seuemail@maneiro.com.br',
  type: 'email',
} as IAbTextField;
