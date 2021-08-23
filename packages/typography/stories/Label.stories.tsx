import * as React from 'react';
import { Meta } from '@storybook/react';
import { Label } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Label,
  title: 'Components/Typography/Label',
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Label>Label</Label>
        </GridItem>
      </Grid>
    </Grid>
  );
};
