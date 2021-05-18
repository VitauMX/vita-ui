import * as React from 'react';
import styled, { css } from 'styled-components';
import buttonBaseStyles from './ButtonBaseStyles';

export interface IButtonTertiaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  plain?: boolean;
}

const colorStyles = (props: IButtonTertiaryProps) => {
  if (props.isDestructive) {
    return css`
      background-color: #ffffff;
      color: #e61300;

      &:hover {
        background-color: #ffe8e5;
      }

      &:active {
        background-color: #ffb9b3;
      }

      &:focus {
        box-shadow: 0px 0px 0px 2px #ff8a7f;
      }

      &:disabled {
        color: #ff7366;
      }
    `;
  }
  if (props.plain) {
    return css`
      background-color: #ffffff;
      color: #2c3f49;

      &:hover {
        background-color: #e2e6e9;
      }

      &:active {
        background-color: #cbd3d7;
      }

      &:focus {
        box-shadow: 0px 0px 0px 2px #bac4ca;
      }

      &:disabled {
        color: #8698a2;
      }
    `;
  }
  return css`
    color: #0077b3;
    background-color: #ffffff;

    &:hover {
      background-color: #e5f7ff;
    }

    &:active {
      background-color: #cceeff;
    }

    &:focus {
      box-shadow: 0px 0px 0px 2px #80d4ff;
    }

    &:disabled {
      color: #4dc3ff;
    }
  `;
};

export const ButtonTertiary = styled.button<IButtonTertiaryProps>`
  font-weight: 600;
  padding: 14px 32px;

  ${(props) => colorStyles(props)}

  ${buttonBaseStyles}
`;
