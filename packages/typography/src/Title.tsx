import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const types = ['display', 'display_big', 'big', 'normal', 'small'] as const;
type Type = typeof types[number];

const TYPE: Record<Uppercase<Type>, Type> = {
  DISPLAY_BIG: 'display_big',
  DISPLAY: 'display',
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small',
};

const HEADING = {
  [TYPE.DISPLAY_BIG]: 'H1',
  [TYPE.DISPLAY]: 'H2',
  [TYPE.BIG]: 'H3',
  [TYPE.NORMAL]: 'H4',
  [TYPE.SMALL]: 'H5',
};

const type = variant({
  prop: 'type',
  variants: {
    display_big: {
      fontSize: '56px',
      letterSpacing: '-2%',
    },
    display: {
      fontSize: '40px',
      letterSpacing: '-1%',
    },
    big: {
      fontSize: '32px',
      letterSpacing: '-0.5%',
    },
    normal: {
      fontSize: '24px',
    },
    small: {
      fontSize: '20px',
    },
  },
});

export interface ITitleProps {
  type?: typeof types[number];
}

const TitleBase = (props: any) => {
  const { type } = props;
  const Tag = HEADING[type ?? TYPE.NORMAL];
  return <Tag {...props} />;
};

export const Title = styled(TitleBase)<ITitleProps>`
  display: block;
  font-family: 'Galano Grotesque Alt', sans-serif;
  font-weight: bold;
  line-height: 125%;
  color: #4f6672;
  ${type}
`;

Title.defaultProps = {
  type: TYPE.NORMAL,
};
