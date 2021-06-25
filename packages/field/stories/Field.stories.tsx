import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Field, FieldProps } from '../src';
import { Box, Flex } from '../../layout/src/index';

export default {
  component: Field,
  title: 'Components/Field',
  argTypes: {
    onBlur: { action: 'onBlur' },
    onFocus: { action: 'onFocus' },
    onChange: { action: 'onChange' },
  },
} as Meta;

export const Default: Story<FieldProps> = (args) => {
  return (
    <Box p={5}>
      <Flex justifyContent="center">
        <Field {...args} />
      </Flex>
    </Box>
  );
};

Default.args = {
  label: 'Label',
  placeholder: '',
  validation: 'normal',
  readOnly: false,
  disabled: false,
  defaultValue: '',
};
