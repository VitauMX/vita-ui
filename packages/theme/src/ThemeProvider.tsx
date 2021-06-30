import * as React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps as StyledThemeProviderProps,
} from 'styled-components';
import { theme, VitaTheme } from './theme';

// eslint-disable-next-line @typescript-eslint/ban-types
type SThemeProviderProps<T extends object, U extends object = T> = Omit<
  StyledThemeProviderProps<T, U>,
  'theme'
>;

export interface ThemeProviderProps
  extends SThemeProviderProps<VitaTheme, VitaTheme> {
  theme?: VitaTheme | ((t: VitaTheme) => VitaTheme);
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme: theme,
};
