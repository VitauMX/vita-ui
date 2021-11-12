import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#1AABFF',
  colorSecondary: '#0082CC',

  // UI
  appBg: 'white',
  appContentBg: '#F9FAFB',
  appBorderColor: '#1AABFF',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2C3F49',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#2C3F49',
  barSelectedColor: '#F2F6F8',
  barBg: '#1AABFF',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Vita UI',
  brandUrl: 'https://vitau.mx',
  brandImage: 'https://res.cloudinary.com/vitau/image/upload/v1636294892/vita_xire1z.png',
});