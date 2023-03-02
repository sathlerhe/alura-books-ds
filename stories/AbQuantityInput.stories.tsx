import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {
  AbQuantityInput,
  IAbQuantityInput,
} from '../src/components/AbQuantityInput';

export default {
  title: 'Components/AbQuantityInput',
  component: AbQuantityInput,
} as ComponentMeta<typeof AbQuantityInput>;

const Template: ComponentStory<typeof AbQuantityInput> = args => (
  <AbQuantityInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  minusIcon: '-',
  plusIcon: '+',
  label: 'Quantidade',
} as IAbQuantityInput;
