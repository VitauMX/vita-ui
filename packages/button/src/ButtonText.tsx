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
      color: var(--text-button-destructive);

      background-color: transparent;
      &:hover {
        background-color: var(--background-action-ghost-destructive-hover);
      }

      &:active {
        background-color: var(--background-action-ghost-destructive-active);
      }

      &:focus {
        background-color: transparent;
        box-shadow: 0px 0px 0px 2px var(--colors-red-10);
      }

      &:disabled {
        color: var(--background-action-destructive-disable);
        background-color: transparent;
      }
    `;
  }
  if (props.isPlain) {
    return css`
      color: var(--colors-gray-90);

      background-color: transparent;
      &:hover {
        background-color: var(--colors-gray-10);
      }

      &:active {
        background-color: var(--colors-gray-30);
      }

      &:focus {
        background-color: transparent;
        box-shadow: 0px 0px 0px 2px var(--colors-gray-30);
      }

      &:disabled {
        color: var(--colors-gray-50);
        background-color: transparent;
      }
    `;
  }
  return css`
    background-color: transparent;

    &:hover {
      background-color: var(--colors-cyan-5);
    }

    &:active {
      background-color: var(--colors-cyan-10);
    }

    &:focus {
      background-color: transparent;

      box-shadow: 0px 0px 0px 2px var(--colors-cyan-30);
    }

    &:disabled {
      color: var(var(--colors-cyan-40));
      background-color: transparent;
    }
  `;
};

export const ButtonText = styled.button<IButtonTextProps>`
  color: var(--text-cyan);
  ${buttonBaseStyles}
  font-weight: 600;

  ${colorStyles}
  padding: 0;
`;

ButtonText.defaultProps = {
  isDestructive: false,
  isPlain: false,
};
