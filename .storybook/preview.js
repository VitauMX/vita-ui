import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from "@storybook/theming";
import { StoryContext } from '@storybook/react';
import { GlobalStyle } from '../packages/css-normalize';


const lightTheme = create({
  base: "light",
  appBg: "white",
  colorPrimary: "#FF8C69",
  colorSecondary: "#FF8C69",
  brandImage:
    "https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png",
});

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
