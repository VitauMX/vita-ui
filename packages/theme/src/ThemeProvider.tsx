import * as React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps as StyledThemeProviderProps,
} from 'styled-components';
import { theme, VitaTheme } from './theme';

export interface ThemeProviderProps
  extends StyledThemeProviderProps<VitaTheme, VitaTheme> {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme: theme,
};
