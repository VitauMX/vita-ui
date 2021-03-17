import * as React from 'react';
import { Meta } from '@storybook/react';
import { Grid, GridItem, Box } from '../src';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
} as Meta;

export const SimpleGrid = () => (
  <Grid gridTemplateColumns="repeat(3, auto)" gridGap={3}>
    <GridItem>
      <Box p={3} backgroundColor="tomato">
        1
      </Box>
    </GridItem>
    <GridItem>
      <Box p={3} backgroundColor="papayawhip">
        2
      </Box>
    </GridItem>
    <GridItem>
      <Box p={3} backgroundColor="plum">
        3
      </Box>
    </GridItem>
  </Grid>
);

export const VariableColumns = () => (
  <Grid gridTemplateColumns="repeat(12, 1fr)">
    <GridItem gridColumn="span 6/span 6">
      <Box p={3} backgroundColor="tomato">
        1
      </Box>
    </GridItem>
    <GridItem gridColumn="span 4/span 4">
      <Box p={3} backgroundColor="papayawhip">
        2
      </Box>
    </GridItem>
    <GridItem gridColumn="span 2/span 2">
      <Box p={3} backgroundColor="plum">
        3
      </Box>
    </GridItem>
  </Grid>
);

export const ResponsiveGrid = () => (
  <Grid
    gridTemplateColumns={[
      'repeat(1, auto)',
      'repeat(2, auto)',
      'repeat(4, auto)',
    ]}
    gridGap={3}
  >
    <GridItem>
      <Box p={3} backgroundColor="tomato">
        1
      </Box>
    </GridItem>
    <GridItem>
      <Box p={3} backgroundColor="papayawhip">
        2
      </Box>
    </GridItem>
    <GridItem>
      <Box p={3} backgroundColor="plum">
        3
      </Box>
    </GridItem>
    <GridItem>
      <Box p={3} backgroundColor="plum">
        4
      </Box>
    </GridItem>
  </Grid>
);
