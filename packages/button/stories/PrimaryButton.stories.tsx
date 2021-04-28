import { Meta } from '@storybook/react';
import * as React from 'react';
import { ButtonPrimary } from '../src';
import { Box, Grid, GridItem } from '../../layout/src/index';

export default {
  title: 'Components/Button/Primary',
  component: ButtonPrimary,
} as Meta;

export const Variants = () => {
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
            <ButtonPrimary>Text</ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary disabled>Text</ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Destructive</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary isDestructive>Text</ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary disabled isDestructive>
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Large</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary size="large">Text</ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary disabled size="large">
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Large</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary size="small">Text</ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary disabled size="small">
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Large</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary isDestructive size="small">
              Text
            </ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary disabled isDestructive size="small">
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
    </Grid>
  );
};
