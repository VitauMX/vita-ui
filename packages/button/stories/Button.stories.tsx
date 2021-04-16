import { Meta } from '@storybook/react';
import * as React from 'react';
import { Button } from '../src';
import { Flex } from '../../layout/src/index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const CoreButton = () => {
  return (
    <Flex>
      <Button variant="primary">Text</Button>
      <Button variant="primary">Super Large Text</Button>
    </Flex>
  );
};
