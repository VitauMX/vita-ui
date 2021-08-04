import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader } from '../src';
import styled from 'styled-components';

import { Box, Flex } from '../../layout/src/index';

export default {
  component: Loader,
  title: 'Components/Loader',
} as Meta;

const StyledLoaderContainer = styled.div`
  margin-bottom: 1rem;
  background-color: #022a3b;
  width: 50px;
  height: 50px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Default: Story = (args) => {
  return (
    <Box p={5}>
      <Flex justifyContent="center">
        <StyledLoaderContainer>
          <Loader color="white" size="normal" />
        </StyledLoaderContainer>
      </Flex>
      <Flex justifyContent="center">
        <Loader {...args} />
      </Flex>
    </Box>
  );
};

Default.args = {
  color: 'normal',
  size: 'lg',
};
