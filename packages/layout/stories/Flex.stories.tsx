import * as React from 'react';
import { Meta } from '@storybook/react';
import { Box, Flex } from '../src';

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
} as Meta;

export const SimpleFlex = () => (
  <Flex>
    <Box p={3} backgroundColor="tomato">
      1
    </Box>
    <Box p={3} backgroundColor="papayawhip">
      2
    </Box>
    <Box p={3} backgroundColor="plum">
      3
    </Box>
  </Flex>
);

export const AlternatingGrid = () => (
  <Flex flexWrap="wrap" justifyContent="space-between">
    <Box
      p={3}
      backgroundColor="tomato"
      width="46%"
      height="100px"
      marginBottom="2%"
    >
      1
    </Box>
    <Box
      p={3}
      backgroundColor="papayawhip"
      width="46%"
      height="100px"
      marginBottom="2%"
    >
      2
    </Box>
    <Box
      p={3}
      backgroundColor="plum"
      width="100%"
      height="100px"
      marginBottom="2%"
    >
      3
    </Box>
  </Flex>
);

export const Grid = () => (
  <Box height="580px">
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Box
        p={3}
        backgroundColor="tomato"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        1
      </Box>
      <Box
        p={3}
        backgroundColor="papayawhip"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        2
      </Box>
      <Box
        p={3}
        backgroundColor="plum"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        3
      </Box>
      <Box
        p={3}
        backgroundColor="tomato"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        4
      </Box>
      <Box
        p={3}
        backgroundColor="papayawhip"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        5
      </Box>
      <Box
        p={3}
        backgroundColor="plum"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        6
      </Box>
      <Box
        p={3}
        backgroundColor="tomato"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        7
      </Box>
      <Box
        p={3}
        backgroundColor="papayawhip"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        8
      </Box>
      <Box
        p={3}
        backgroundColor="plum"
        height="100px"
        marginBottom="2%"
        flex="0 28%"
      >
        9
      </Box>
    </Flex>
  </Box>
);
