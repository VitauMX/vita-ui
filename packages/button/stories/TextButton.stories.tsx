import { Meta } from '@storybook/react';
import * as React from 'react';
import { Box, Grid, GridItem } from '../../layout/src/index';
import { ButtonText } from '../src';

export default {
  title: 'Components/Atoms/Button/Text',
  component: ButtonText,
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
          <Box>Text</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonText>Text</ButtonText>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonText disabled>Text</ButtonText>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Text Destructive</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonText isDestructive>Text</ButtonText>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonText isDestructive disabled>
            Text
          </ButtonText>
        </GridItem>
      </Grid>

      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Text Plain</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonText isPlain>Text</ButtonText>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonText isPlain disabled>
            Text
          </ButtonText>
        </GridItem>
      </Grid>
    </Grid>
  );
};
