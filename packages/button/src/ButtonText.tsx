import * as React from 'react';
import styled, { css } from 'styled-components';
import buttonBaseStyles from './ButtonBaseStyles';

export interface IButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  isPlain?: boolean;
}

const colorStyles = (props: IButtonTextProps) => {
  if (props.isDestructive) {
    return css`
      color: #ff2d1a;

      background-color: transparent;
      &:hover {
        background-color: #ffe9e6;
      }

      &:active {
        background-color: #ffbab4;
      }

      &:focus {
        background-color: transparent;
        box-shadow: 0px 0px 0px 2px #ff8a7f;
      }

      &:disabled {
        color: #ff7366;
        background-color: transparent;
      }
    `;
  }
  if (props.isPlain) {
    return css`
      color: #2c3f49;

      background-color: transparent;
      &:hover {
        background-color: #e3e7ea;
      }

      &:active {
        background-color: #ccd4d8;
      }

      &:focus {
        background-color: transparent;
        box-shadow: 0px 0px 0px 2px #bac4ca;
      }

      &:disabled {
        color: #8698a2;
        background-color: transparent;
      }
    `;
  }
  return css`
    background-color: transparent;

    &:hover {
      background-color: #e6f7ff;
    }

    &:active {
      background-color: #cdefff;
    }

    &:focus {
      background-color: transparent;

      box-shadow: 0px 0px 0px 2px #80d4ff;
    }

    &:disabled {
      color: #4dc3ff;
      background-color: transparent;
    }
  `;
};

export const ButtonText = styled.button<IButtonTextProps>`
  color: #0077b3;
  ${buttonBaseStyles}
  font-weight: 600;

  ${colorStyles}
  padding: 0;
`;

ButtonText.defaultProps = {
  isDestructive: false,
  isPlain: false,
};
