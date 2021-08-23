import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const types = ['primary', 'secondary', 'tertiary'] as const;
type Type = typeof types[number];

const TYPE: Record<Uppercase<Type>, Type> = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const type = variant({
  prop: 'type',
  variants: {
    primary: {
      color: '#006699',
      '&:hover': {
        backgroundColor: '#CCEEFF',
      },
      '&:active': {
        backgroundColor: '#B3E5FF',
      },
    },
    secondary: {
      color: '#4F6672',
      '&:hover': {
        backgroundColor: '#E2E6E9',
      },
      '&:active': {
        backgroundColor: '#CBD3D7',
      },
    },
    tertiary: {
      color: '#0077B3',
      border: '1px solid #0088CC',
      '&:hover': {
        backgroundColor: '#CCEEFF',
      },
      '&:active': {
        backgroundColor: '#0099E6',
        color: '#FFFFFF',
      },
    },
  },
});

export interface PillProps extends React.BaseHTMLAttributes<HTMLBaseElement> {
  type?: typeof types[number];
}

export const Pill = styled.span<PillProps>`
  padding: 4px 16px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 32px;
  ${type}
`;

Pill.defaultProps = {
  type: TYPE.PRIMARY,
};
