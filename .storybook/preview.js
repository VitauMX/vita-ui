import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { StoryContext } from '@storybook/react';
import { GlobalStyle } from '../packages/css-normalize';
import theme from './vitauTheme'

import './tokens.css'
import './main.css'

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
 
};

const withGlobalStyles = (StoryFn: Function, context: StoryContext) => {
  return (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  );
};

export const decorators = [withGlobalStyles];
