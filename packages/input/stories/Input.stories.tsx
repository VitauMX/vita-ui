import * as React from 'react';
import { Meta } from '@storybook/react';
import { Input } from '../src';
import { DotCircleIcon } from '../../icons/src/icons/DotCircle';
import { ButtonSecondary } from '../../button/src/ButtonSecondary';
import { Grid, GridItem, Box, Flex } from '../../layout/src/index';

import styled from 'styled-components';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;
const StyledInputsStoriesContainer = styled.div`
  height: 100vh;
`;
const StyledInputsHeader = styled.div`
  font-family: 'Open Sans', sans-serif;
  border-bottom: 1px solid #00a2ff;
  margin-bottom: 1rem;
  padding: 1rem;

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 14px;
    color: #8698a2;
  }
  h1 {
    font-size: 30px;
    font-family: 'Galano Grotesque Alt', sans-serif;
  }
`;

export const Variants = () => {
  return (
    <StyledInputsStoriesContainer>
      <StyledInputsHeader>
        <h2>Atoms</h2>
        <h1>Inputs</h1>
      </StyledInputsHeader>
      <Box p={5}>
        <Flex justifyContent="center">
          <Input
            inputButton={<ButtonSecondary>text</ButtonSecondary>}
            label="Label"
            placeholder="Placeholder"
            validation="normal"
            message="Message"
          />
        </Flex>
      </Box>
      <Grid gridTemplateRows="repeat(4, 1fr)" gridRowGap="1rem">
        {/* NORMAL */}
        <Grid
          gridTemplateColumns="repeat(5, 1fr)"
          gridColumnGap="1rem"
          justifyContent="center"
        >
          <GridItem>
            <Input
              placeholder="placeholder"
              label="Label"
              validation="normal"
            />
          </GridItem>
          <GridItem>
            <Input
              placeholder="placeholder"
              icon={<DotCircleIcon />}
              label="Label"
              validation="normal"
            />
          </GridItem>

          <GridItem>
            <Input
              placeholder="placeholder"
              iconButton={<DotCircleIcon />}
              label="Label"
              validation="normal"
            />
          </GridItem>
          <GridItem>
            <Input
              placeholder="placeholder"
              inputButton={<ButtonSecondary>text</ButtonSecondary>}
              label="Label"
              validation="normal"
            />
          </GridItem>
          <GridItem>
            <Input
              placeholder="placeholder"
              inputButton={<ButtonSecondary>text</ButtonSecondary>}
              label="Label"
              validation="normal"
              message="Message"
            />
          </GridItem>
        </Grid>
        {/* DISABLE */}
        <Grid
          gridTemplateColumns="repeat(5, 1fr)"
          gridColumnGap="1rem"
          justifyContent="center"
        >
          <GridItem>
            <Input disabled label="Label" validation="normal" />
          </GridItem>
          <GridItem>
            <Input
              disabled
              icon={<DotCircleIcon />}
              label="Label"
              validation="normal"
            />
          </GridItem>

          <GridItem>
            <Input
              disabled
              iconButton={<DotCircleIcon />}
              label="Label"
              validation="normal"
            />
          </GridItem>
          <GridItem>
            <Input
              disabled
              inputButton={<ButtonSecondary disabled>text</ButtonSecondary>}
              label="Label"
              validation="normal"
            />
          </GridItem>
          <GridItem>
            <Input
              disabled
              inputButton={<ButtonSecondary disabled>text</ButtonSecondary>}
              label="Label"
              validation="normal"
              message="Message"
            />
          </GridItem>
        </Grid>
        {/* SUCCESS */}
        <Grid
          gridTemplateColumns="repeat(5, 1fr)"
          gridColumnGap="1rem"
          justifyContent="center"
        >
          <GridItem>
            <Input
              touched
              placeholder="placeholder"
              label="Label"
              validation="success"
            />
          </GridItem>
          <GridItem>
            <Input
              touched
              icon={<DotCircleIcon />}
              label="Label"
              validation="success"
            />
          </GridItem>

          <GridItem>
            <Input
              touched
              iconButton={<DotCircleIcon />}
              label="Label"
              validation="success"
            />
          </GridItem>
          <GridItem>
            <Input
              touched
              inputButton={<ButtonSecondary>text</ButtonSecondary>}
              label="Label"
              validation="success"
            />
          </GridItem>
          <GridItem>
            <Input
              touched
              inputButton={<ButtonSecondary>text</ButtonSecondary>}
              label="Label"
              validation="success"
              message="Message"
            />
          </GridItem>
        </Grid>
        {/* ERROR */}
        <Grid
          gridTemplateColumns="repeat(5, 1fr)"
          gridColumnGap="1rem"
          justifyContent="center"
        >
          <GridItem>
            <Input touched label="Label" validation="error" />
          </GridItem>
          <GridItem>
            <Input
              touched
              icon={<DotCircleIcon />}
              label="Label"
              validation="error"
            />
          </GridItem>

          <GridItem>
            <Input
              touched
              iconButton={<DotCircleIcon />}
              label="Label"
              validation="error"
            />
          </GridItem>
          <GridItem>
            <Input
              touched
              inputButton={<ButtonSecondary>text</ButtonSecondary>}
              label="Label"
              validation="error"
            />
          </GridItem>
          <GridItem>
            <Input
              touched
              inputButton={<ButtonSecondary>text</ButtonSecondary>}
              label="Label"
              validation="error"
              message="Message"
            />
          </GridItem>
        </Grid>
      </Grid>
    </StyledInputsStoriesContainer>
  );
};

Variants.args = {
  label: 'Label',
  placeholder: '',
  validation: 'normal',
  message: 'Message',
  readOnly: false,
  disabled: false,
  defaultValue: '',
};
