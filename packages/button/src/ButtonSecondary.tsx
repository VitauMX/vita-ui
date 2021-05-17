import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';

const sizes = ['small', 'medium'] as const;
type Size = typeof sizes[number];

const SIZE: Record<Uppercase<Size>, Size> = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const size = variant({
  prop: 'size',
  variants: {
    medium: {
      padding: '14px 32px',
    },
    small: {
      padding: '9px 16px',
      fontSize: '14px',
    },
  },
});

export interface IButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: typeof sizes[number];
}

const colorStyles = () => {
  return css`
    background-color: #ffffff;
    box-shadow: 0px 0px 0px 1px #0088cc inset;

    &:hover {
      box-shadow: 0px 0px 0px 2px #0088cc inset;
    }

    &:active {
      background-color: #e5f7ff;
      box-shadow: 0px 0px 0px 2px #0077b3 inset;
    }

    &:focus {
      box-shadow: 0px 0px 0px 1px #0088cc inset, 0px 0px 0px 2px #80d4ff;
    }

    &:disabled {
      color: #4dc3ff;
      box-shadow: 0px 0px 0px 1px #80d4ff inset;
    }
  `;
};

export const ButtonSecondary = styled.button<IButtonSecondaryProps>`
  color: #0077b3;
  font-weight: 600;

  ${colorStyles}
  ${buttonBaseStyles}
  ${size}
`;

ButtonSecondary.defaultProps = {
  size: SIZE.MEDIUM,
};
