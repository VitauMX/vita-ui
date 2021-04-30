import * as React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';
import { ThemeProvider } from '../src';

export default {
  component: ThemeProvider,
  title: 'Components/ThemeProvider',
} as Meta;

const CustomDiv = styled.div<any>`
  color: ${(props) => props.theme.primaryColor};
  background: ${(props) => props.theme.backgroundColor};
`;

export const SimpleFlex = () => (
  <ThemeProvider theme={{ primaryColor: 'blue', backgroundColor: 'green' }}>
    <CustomDiv>Hi, I have a custom theme.</CustomDiv>
  </ThemeProvider>
);
