import * as React from 'react';
import { Meta } from '@storybook/react';
import { Overline } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Overline,
  title: 'Components/Typography/Overline',
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Overline>OVERLINE</Overline>
        </GridItem>
      </Grid>
    </Grid>
  );
};
