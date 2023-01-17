import { create } from '@storybook/theming/create'
import logo from '../stories/assets/logo-color.svg'

export default create({
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Vitau UI Framework',
  brandUrl: 'https://vitau.mx',
  brandImage: logo,
  base: 'light',


  colorPrimary: '#1aabff',
  colorSecondary: '#002F4B',

  // UI
  appBg: '#F5F8FF',
  appContentBg: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2c3f49',
  textInverseColor: '#4f6672',

  // Toolbar default and active colors
  barTextColor: '#fafafa',
  barSelectedColor: '#2c3f49',
  barBg: '#1aabff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})
