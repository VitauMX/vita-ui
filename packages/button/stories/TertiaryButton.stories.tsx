import { Meta } from '@storybook/react';
import * as React from 'react';
import { ButtonTertiary } from '../src';
import { Box, Grid, GridItem } from '../../layout/src/index';

export default {
  title: 'Components/Button/Tertiary',
  component: ButtonTertiary,
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
          <Box>Tertiary</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonTertiary>Text</ButtonTertiary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonTertiary disabled>Text</ButtonTertiary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Tertiary Destructive</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonTertiary isDestructive>Text</ButtonTertiary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonTertiary disabled isDestructive>
            Text
          </ButtonTertiary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Tertiary Plain</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonTertiary plain>Text</ButtonTertiary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonTertiary disabled plain>
            Text
          </ButtonTertiary>
        </GridItem>
      </Grid>
    </Grid>
  );
};
