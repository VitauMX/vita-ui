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
      color: 'var(--colors-cyan-100)',
      '&:hover': {
        backgroundColor: 'var(--colors-cyan-10)',
      },
      '&:active': {
        backgroundColor: 'var(--colors-cyan-20)',
      },
    },
    secondary: {
      color: 'var(--text-secondary)',
      '&:hover': {
        backgroundColor: 'var(--colors-gray-10)',
      },
      '&:active': {
        backgroundColor: 'var(--colors-gray-20)',
      },
    },
    tertiary: {
      color: 'var(--colors-cyan-90)',
      border: '1px solid var(--colors-cyan-80)',
      '&:hover': {
        backgroundColor: 'var(--colors-cyan-10)',
      },
      '&:active': {
        backgroundColor: 'var(--colors-cyan-70)',
        color: 'var(--colors-white)',
      },
    },
  },
});

export interface PillProps extends React.BaseHTMLAttributes<HTMLBaseElement> {
  type?: typeof types[number];
}

export const Pill = styled.span<PillProps>`
  padding: 4px 16px;
  font-family: var(--font-family-open-sans);
  font-style: normal;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  line-height: var(--line-height-2);
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 32px;
  ${type}
`;

Pill.defaultProps = {
  type: TYPE.PRIMARY,
};
