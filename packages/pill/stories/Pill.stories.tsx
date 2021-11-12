import { Meta } from '@storybook/react';
import * as React from 'react';
import { Box, Grid, GridItem } from '../../layout/src/index';
import { Pill } from '../src';

export default {
  title: 'Components/Atoms/Pill',
  component: Pill,
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Pill type="primary">asd</Pill>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Pill type="secondary">asd</Pill>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Pill type="tertiary">asd</Pill>
        </GridItem>
      </Grid>
    </Grid>
  );
};
