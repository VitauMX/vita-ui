import * as React from 'react';
import { Meta } from '@storybook/react';
import { Message } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Message,
  title: 'Components/Typography/Message',
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Message type="normal">Message</Message>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Message type="success">Message Success</Message>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">
          <Message type="error">Message Error</Message>
        </GridItem>
      </Grid>
    </Grid>
  );
};
