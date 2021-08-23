import * as React from 'react';
import { Meta } from '@storybook/react';
import { Caption } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Caption,
  title: 'Components/Typography/Caption',
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Caption>Caption</Caption>
        </GridItem>
      </Grid>
    </Grid>
  );
};
