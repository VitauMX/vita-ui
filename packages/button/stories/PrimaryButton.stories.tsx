import { Meta } from '@storybook/react';
import * as React from 'react';
import { ButtonPrimary } from '../src';
import { Box, Grid, GridItem, Flex } from '../../layout/src/index';
import { withDesign } from 'storybook-addon-designs';
import { CheckCircleIcon } from '../../icons/src/icons/CheckCircle';

export default {
  title: 'Components/Atoms/Button/Primary',
  component: ButtonPrimary,
  decorators: [withDesign],
} as Meta;

export const Variants = () => {
  return (
    <Grid gridTemplateRows="repeat(5, 1fr)" gridRowGap="2rem">
      <Grid gridTemplateColumns="repeat(7, 1fr)">
        <GridItem gridColumn="4 / 2">Normal</GridItem>
        <GridItem gridColumn="span 2/span 2">Disabled</GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Flex alignItems="center">
            <ButtonPrimary>Text</ButtonPrimary>
            <Box margin="20px">
              <ButtonPrimary loading>Text</ButtonPrimary>
            </Box>
          </Flex>
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
          <Box>Primary Small</Box>
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
          <Box>Primary Small Destructive</Box>
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
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Icon Left</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary icon={<CheckCircleIcon />}>Text</ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary icon={<CheckCircleIcon />} disabled>
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Icon Right</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary icon={<CheckCircleIcon />} iconPosition="right">
              Text
            </ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary
            icon={<CheckCircleIcon width="16px" height="16px" />}
            iconPosition="right"
            disabled
          >
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Small Icon Left</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary size="small" icon={<CheckCircleIcon />}>
              Text
            </ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary size="small" icon={<CheckCircleIcon />} disabled>
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)">
        <GridItem gridColumn="span 1/span 1">
          <Box>Primary Small Icon Right</Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <Box>
            <ButtonPrimary
              size="small"
              icon={<CheckCircleIcon />}
              iconPosition="right"
            >
              Text
            </ButtonPrimary>
          </Box>
        </GridItem>
        <GridItem gridColumn="span 2/span 2">
          <ButtonPrimary
            size="small"
            icon={<CheckCircleIcon />}
            iconPosition="right"
            disabled
          >
            Text
          </ButtonPrimary>
        </GridItem>
      </Grid>
    </Grid>
  );
};

Variants.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/qKyhrxhnjz4Fo62NhTc287/Vita-Components?node-id=10%3A4777',
  },
};
