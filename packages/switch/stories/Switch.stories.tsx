import { Meta } from '@storybook/react';
import * as React from 'react';
import { Switch } from '../src';

export default {
  component: Switch,
  title: 'Components/Switch',
} as Meta;

export const Default = () => {
  return <Switch name="test" />;
};
