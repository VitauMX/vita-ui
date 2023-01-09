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
      color: var(--colors-red-60);

      background-color: transparent;
      &:hover {
        background-color: #ffe9e6;
      }

      &:active {
        background-color: #ffbab4;
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
      color: var(--text-primary);

      background-color: transparent;
      &:hover {
        background-color: #e3e7ea;
      }

      &:active {
        background-color: #ccd4d8;
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
    background-color: var(--colors-gray-5);

    &:hover {
      background-color: #e6f7ff;
    }

    &:active {
      background-color: #cdefff;
    }

    &:focus {
      background-color: transparent;

      box-shadow: 0px 0px 0px 2px var(--colors-cyan-30);
    }

    &:disabled {
      color: var(--colors-cyan-40);
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
      '--field-input-border-color': 'var(--colors-gray-30)',
      '--field-input-hover-border-color': 'var(--colors-gray-50)',
      '--field-input-focus-border-color': 'var(--border-card-active)',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-cyan-20)',
      '--field-label-color': 'var(--text-secondary)',
      '--field-label-focus-color': 'var(--text-secondary)',
    },
    success: {
      '--field-input-border-color': 'var(--border-input-success-base)',
      '--field-input-hover-border-color': 'var(--border-input-success-hover)',
      '--field-input-focus-border-color': 'var(--border-input-success-hover)',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-green-10)',
      '--field-label-color': 'var(--colors-gray-70)',
      '--field-label-focus-color': 'var(--text-success)',
    },
    error: {
      '--field-input-border-color': '#FF2D1A',
      '--field-input-hover-border-color': '#FF2D1A',
      '--field-input-focus-border-color': '#FF2D1A',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-red-10)',
      '--field-label-color': 'var(--text-secondary)',
      '--field-label-focus-color': 'var(--colors-red-70)',
    },
  },
});
interface StyledIconButtoProps {
  validation?: Validation;
}
export const StyledIconButton = styled.button<StyledIconButtoProps>`
  color: var(--text-cyan);
  font-weight: var(--font-weight-semibold);
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
