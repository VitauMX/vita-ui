import * as React from 'react';
import styled, { css } from 'styled-components';
import buttonBaseStyles from './ButtonBaseStyles';
import { variant } from 'styled-system';

import { IconButtonProps, Validation } from './useIconButton';

export interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  isPlain?: boolean;
}

const colorStyles = (props: IIconButtonProps) => {
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
    background-color: #f1f3f4;

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
const validation = variant<
  Record<string, any> | React.CSSProperties,
  Validation
>({
  prop: 'validation',
  variants: {
    normal: {
      '--field-input-border-color': '#bac4ca',
      '--field-input-hover-border-color': '#8698a2',
      '--field-input-focus-border-color': '#1ab3ff',
      '--field-input-box-shadow': '0 0 0 2px #b3e5ff',
      '--field-label-color': '#4f6672',
      '--field-label-focus-color': '#4f6672',
    },
    success: {
      '--field-input-border-color': '#22C383',
      '--field-input-hover-border-color': '#22C383',
      '--field-input-focus-border-color': '#22C383',
      '--field-input-box-shadow': '0 0 0 2px #93ECC8',
      '--field-label-color': '#4f6672',
      '--field-label-focus-color': '#178257',
    },
    error: {
      '--field-input-border-color': '#FF2D1A',
      '--field-input-hover-border-color': '#FF2D1A',
      '--field-input-focus-border-color': '#FF2D1A',
      '--field-input-box-shadow': '0 0 0 2px #FF8A7F',
      '--field-label-color': '#4f6672',
      '--field-label-focus-color': '#E61300',
    },
  },
});
interface StyledIconButtoProps {
  validation?: Validation;
}
export const StyledIconButton = styled.button<StyledIconButtoProps>`
  color: #0077b3;
  font-weight: 600;
  width: 44px;
  height: 44px;
  ${colorStyles}
  ${buttonBaseStyles}
  ${validation}
`;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { children, icon, ...buttonProps } = props;

    return (
      <StyledIconButton validation={validation} ref={ref} {...buttonProps}>
        {icon}
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'button';
