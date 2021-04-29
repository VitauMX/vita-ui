import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';

const sizes = ['small', 'medium', 'large'] as const;
type Size = typeof sizes[number];

const SIZE: Record<Uppercase<Size>, Size> = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const size = variant({
  prop: 'size',
  variants: {
    large: {
      padding: '18px 32px',
      fontSize: '20px',
    },
    medium: {
      padding: '14px 32px',
    },
    small: {
      padding: '9px 16px',
      fontSize: '14px',
    },
  },
});

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  size?: typeof sizes[number];
}

const colorStyles = (props: IButtonProps) => {
  if (props.isDestructive) {
    return css`
      background-color: #ff2d1a;

      &:hover {
        background-color: #cc1100;
      }

      &:active {
        background-color: #b30f00;
      }

      &:focus {
        box-shadow: 0px 0px 0px 2px #ff8a7f;
      }

      &:disabled {
        background-color: #ff5b4c;
      }
    `;
  }
  return css`
    background-color: #0099e6;

    &:hover {
      background-color: #0088cc;
    }

    &:active {
      background-color: #0077b3;
    }

    &:focus {
      box-shadow: 0px 0px 0px 2px #80d4ff;
    }

    &:disabled {
      background-color: #80d4ff;
    }
  `;
};

export const ButtonPrimary = styled.button<IButtonProps>`
  color: #ffffff;
  font-weight: 600;

  ${(props) => colorStyles(props)}

  ${buttonBaseStyles}
  ${size}
`;

ButtonPrimary.defaultProps = {
  size: SIZE.MEDIUM,
};
