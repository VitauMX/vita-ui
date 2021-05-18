import { Meta } from '@storybook/react';
import * as React from 'react';
import { Box, Grid, GridItem } from '../../layout/src/index';
import { ButtonSecondary } from '../src';

export default {
  title: 'Components/Button/Secondary',
  component: ButtonSecondary,
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">Normal</GridItem>
        <GridItem gridColumn="span 2/span 2">Disabled</GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Secondary</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonSecondary>Text</ButtonSecondary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonSecondary disabled>Text</ButtonSecondary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Secondary Small</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonSecondary size="small">Text</ButtonSecondary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonSecondary disabled size="small">
            Text
          </ButtonSecondary>
        </GridItem>
      </Grid>
    </Grid>
  );
};
