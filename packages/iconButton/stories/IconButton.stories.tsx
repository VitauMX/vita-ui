import { Meta } from '@storybook/react';
import * as React from 'react';
import { Box, Grid, GridItem } from '../../layout/src/index';
import { DotCircleIcon } from '../../icons/dist/cjs/icons/DotCircle';

import { IconButton } from '../src';

export default {
  title: 'Components/IconButton/Text',
  component: IconButton,
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
            <IconButton icon={<DotCircleIcon />}>DotCircleIcon</IconButton>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <IconButton icon={<DotCircleIcon />} disabled>
            Text
          </IconButton>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Text Destructive</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <IconButton validation="success">Text</IconButton>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <IconButton>Text</IconButton>
        </GridItem>
      </Grid>

      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Text Plain</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <IconButton isPlain>Text</IconButton>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <IconButton isPlain disabled>
            Text
          </IconButton>
        </GridItem>
      </Grid>
    </Grid>
  );
};
