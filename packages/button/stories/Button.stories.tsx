import { Meta } from '@storybook/react';
import * as React from 'react';
import { Button } from '../src';
import { Box, Grid, GridItem } from '../../layout/src/index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const PrimaryButton = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="4 / 2">Normal</GridItem>
        <GridItem gridColumn="span 2/span 2">Disabled</GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Button variant="primary">Text</Button>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Button variant="primary" disabled>
            Text
          </Button>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Destructive</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Button variant="primary" destructive>
              Text
            </Button>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Button variant="primary" disabled destructive>
            Text
          </Button>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Large</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Button variant="primary" size="large">
              Text
            </Button>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Button variant="primary" disabled size="large">
            Text
          </Button>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Large</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Button variant="primary" size="small">
              Text
            </Button>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Button variant="primary" disabled size="small">
            Text
          </Button>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Large</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <Button variant="primary" destructive size="small">
              Text
            </Button>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Button variant="primary" disabled destructive size="small">
            Text
          </Button>
        </GridItem>
      </Grid>
    </Grid>
  );
};
