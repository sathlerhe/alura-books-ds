import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbCard } from '../src/components/AbCard';

export default {
  title: 'Components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = () => <AbCard>Teste</AbCard>;

export const Primary = Template.bind({});
