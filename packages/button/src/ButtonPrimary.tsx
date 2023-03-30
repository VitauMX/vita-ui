import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from './Loader';

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

export interface IButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  size?: typeof sizes[number];
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const colorStyles = (props: IButtonPrimaryProps) => {
  if (props.isDestructive) {
    return css`
      background-color: var(--background-action-destructive-base);

      &:hover {
        background-color: var(--background-action-destructive-hover);
      }

      &:active {
        background-color: var(--background-action-destructive-active);
      }

      &:focus {
        box-shadow: 0px 0px 0px 2px var(--colors-red-10);
      }

      &:disabled {
        background-color: var(--background-action-destructive-disable);
      }
    `;
  }
  return css`
    background-color: var(--colors-primary);

    &:hover {
      background-color: var(--colors-cyan-80);
    }

    &:active {
      background-color: var(--colors-cyan-90);
    }

    &:focus {
      box-shadow: 0px 0px 0px 2px var(--colors-cyan-30);
    }

    &:disabled {
      background-color: var(--colors-cyan-30);
    }
  `;
};

const StyledButtonPrimary = styled.button<IButtonPrimaryProps>`
  color: var(--colors-white);
  font-weight: var(--font-weight-semibold);
  ${(props) => colorStyles(props)}

  ${buttonBaseStyles}
  ${size}
`;

export const ButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  IButtonPrimaryProps
>((props, ref) => {
  const { children, isLoading, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonPrimary ref={ref} {...buttonProps}>
      {isLoading ? ( // conditionally render loading status
        <Loader color="white" />
      ) : (
        <>
          {leftIcon && <ButtonIcon marginEnd="8px">{leftIcon}</ButtonIcon>}
          {children}
          {rightIcon && <ButtonIcon marginStart="8px">{rightIcon}</ButtonIcon>}
        </>
      )}
    </StyledButtonPrimary>
  );
});

ButtonPrimary.displayName = 'button';

ButtonPrimary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
