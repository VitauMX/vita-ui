import * as React from 'react';
import { Meta } from '@storybook/react';
import { Body } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Body,
  title: 'Components/Typography/Body',
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Body type="big">Title Display Big</Body>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Body type="bold">Title Bold</Body>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Body type="normal">Title Normal</Body>
        </GridItem>
      </Grid>
    </Grid>
  );
};
