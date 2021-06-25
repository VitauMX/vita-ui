import * as React from 'react';
import { Meta } from '@storybook/react';
import { Field } from '../src';
import { Grid, GridItem } from '../../layout/src/index';

export default {
  component: Field,
  title: 'Components/Field',
} as Meta;

export const Basic = () => {
  return (
    <Grid gridTemplateColumns="repeat(6, 1fr)" gridGap={3}>
      <GridItem gridColumn="span 1/span 1">
        <Field label="Label" />
      </GridItem>
      <GridItem gridColumn="span 1/span 1">
        <Field label="Label" placeholder="Placeholder" />
      </GridItem>
      <GridItem gridColumn="span 1/span 1">
        <Field label="Label" placeholder="Placeholder" defaultValue="Value" />
      </GridItem>
      <GridItem gridColumn="span 1/span 1">
        <Field label="Label" defaultValue="Value" disabled />
      </GridItem>
      <GridItem gridColumn="span 1/span 1">
        <Field label="Label" defaultValue="Value" readOnly />
      </GridItem>
      <GridItem gridColumn="span 1/span 1">
        <Field label="Super long label for testing long labels" />
      </GridItem>
    </Grid>
  );
};
