import * as React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';
import { ThemeProvider, getThemeValue } from '../src';

export default {
  component: ThemeProvider,
  title: 'Components/ThemeProvider',
} as Meta;

const TextPrimary = styled.p`
  font-family: ${getThemeValue('fonts.primary')};
`;

const TextSecondary = styled.p`
  font-family: ${getThemeValue('fonts.secondary')};
`;

export const Default = () => (
  <ThemeProvider>
    <p>I have a default font family</p>
    <TextPrimary>I have a primary font family</TextPrimary>
    <TextSecondary>I have a secondary font family</TextSecondary>
  </ThemeProvider>
);

export const NoThemeProvider = () => (
  <div>
    <p>I have a default font family</p>
    <TextPrimary>I have a primary font family</TextPrimary>
    <TextSecondary>I have a secondary font family</TextSecondary>
  </div>
);

const customTheme = { fonts: { primary: 'monospace', secondary: 'cursive' } };

export const CustomTheme = () => (
  <ThemeProvider theme={customTheme}>
    <p>I have a default font family</p>
    <TextPrimary>I have a primary font family</TextPrimary>
    <TextSecondary>I have a secondary font family</TextSecondary>
  </ThemeProvider>
);

export const NestedThemes = () => (
  <ThemeProvider>
    <h2>Normal Fonts</h2>
    <TextPrimary>I have a primary font family</TextPrimary>
    <TextSecondary>I have a secondary font family</TextSecondary>
    <h2>Inverted fonts</h2>
    <ThemeProvider
      theme={(theme) => ({
        ...theme,
        fonts: {
          ...theme.fonts,
          primary: theme.fonts.secondary,
          secondary: theme.fonts.primary,
        },
      })}
    >
      <TextPrimary>Now I have the secondary font</TextPrimary>
      <TextSecondary>And now I have the primary font</TextSecondary>
    </ThemeProvider>
  </ThemeProvider>
);
