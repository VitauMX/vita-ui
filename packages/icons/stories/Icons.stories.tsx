import { Meta } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../src';
import { Box } from '../../layout';

export default {
  component: Icon,
  title: 'Components/Icons',
} as Meta;

export const Default = () => {
  return <Icon />;
};

export const Styled = () => {
  return (
    <Box color="red">
      <Icon color="purple" />
    </Box>
  );
};
