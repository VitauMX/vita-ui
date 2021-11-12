import { Meta } from '@storybook/react';
import * as React from 'react';
import { Box, Grid, GridItem } from '../../layout/src/index';
import { Select } from '../src';

export default {
  title: 'Components/Atoms/Select',
  component: Select,
} as Meta;

const options = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
];

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">Normal</GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Default</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Select
              id="defaultSelect"
              name="defaultSelect"
              label="default Select"
              options={options}
            />
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2"></GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Disabled</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Select
              id="defaultSelect"
              name="defaultSelect"
              label="default Select"
              options={options}
              disabled
            />
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2"></GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Error</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Select
              id="defaultSelect"
              name="defaultSelect"
              validation="error"
              message="Error message"
              label="Label"
              touched={true}
              options={options}
            />
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2"></GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Success</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Select
              id="defaultSelect"
              name="defaultSelect"
              validation="success"
              message="Success message"
              label="Label"
              touched={true}
              options={options}
            />
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2"></GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Required</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Select
              id="defaultSelect"
              name="requiredSelect"
              label="required Select"
              options={options}
              required
            />
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2"></GridItem>
      </Grid>
    </Grid>
  );
};
