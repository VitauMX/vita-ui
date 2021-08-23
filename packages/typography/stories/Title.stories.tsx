import * as React from 'react';
import { Meta } from '@storybook/react';
import { Title } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Title,
  title: 'Components/Typography/Title',
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Title type="display_big">Title Display Big</Title>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Title type="display">Title Display</Title>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Title type="big">Title Big</Title>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Title type="normal">Title Normal</Title>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Title type="small">Title Small</Title>
        </GridItem>
      </Grid>
    </Grid>
  );
};
