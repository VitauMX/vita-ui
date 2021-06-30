/**
 * Theme should follow the System UI Theme Specification.
 * See: https://system-ui.com/theme
 */

export interface VitaTheme {
  fonts: {
    primary: string;
    secondary: string;
  };
}

export const theme: VitaTheme = {
  fonts: {
    primary: ['Galano Grotesque Alt', 'sans-serif'].join(','),
    secondary: ['Open Sans', 'sans-serif'].join(','),
  },
};
