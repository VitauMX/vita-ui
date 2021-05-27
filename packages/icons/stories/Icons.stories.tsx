import { Meta } from '@storybook/react';
import * as React from 'react';
import { Icon, CommentsIcon } from '../src';
import * as Icons from '../src/icons';
import { Box, Flex, Grid, GridItem } from '../../layout/src/index';

const sampleRows = 6;
const sizeOfSample = 6 * sampleRows;
const iconsArr = Object.entries(Icons).slice(0, sizeOfSample);
const sampleIcons = iconsArr.map(([name, icon]) => ({
  name,
  component: icon,
}));

export default {
  component: Icon,
  title: 'Components/Icons',
} as Meta;

export const Default = () => {
  return <CommentsIcon />;
};

export const Colored = () => {
  return <CommentsIcon color="purple" />;
};

export const Size = () => {
  return (
    <Flex>
      <Box>
        <CommentsIcon width="1em" height="1em" />
      </Box>
      <Box ml="16px">
        <CommentsIcon width="2em" height="2em" />
      </Box>
      <Box ml="16px">
        <CommentsIcon width="3em" height="3em" />
      </Box>
      <Box ml="16px">
        <CommentsIcon width="4em" height="4em" />
      </Box>
    </Flex>
  );
};

export const SampleIcons = () => {
  return (
    <Grid gridGap={3} gridTemplateColumns="repeat(6, 1fr)">
      {sampleIcons.map((icon) => (
        <GridItem key={icon.name}>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <icon.component />
            <p>{icon.name}</p>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};
