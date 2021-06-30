import * as React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps,
} from 'styled-components';

export const ThemeProvider: React.FC<ThemeProviderProps<any, any>> = ({
  theme,
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export const theme = {};
