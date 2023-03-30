import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from '../../loader/src/Loader';

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
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const colorStyles = () => {
  return css`
    background-color: #ffffff;
    box-shadow: 0px 0px 0px 1px var(--colors-cyan-80) inset;

    &:hover {
      box-shadow: 0px 0px 0px 2px var(--colors-cyan-80) inset;
    }

    &:active {
      background-color: #e5f7ff;
      box-shadow: 0px 0px 0px 2px var(--colors-cyan-90) inset;
    }

    &:focus {
      box-shadow: 0px 0px 0px 1px var(--colors-cyan-80) inset,
        0px 0px 0px 2px var(--background-action-primary-disable);
    }

    &:disabled {
      color: var(--colors-cyan-40);
      box-shadow: 0px 0px 0px 1px var(--colors-cyan-30) inset;
      background-color: transparent;
    }
  `;
};

export const StyledButtonSecondary = styled.button<IButtonSecondaryProps>`
  color: var(--text-cyan);
  font-weight: var(--font-weight-semibold);

  ${colorStyles}
  ${buttonBaseStyles}
  ${size}
`;

export const ButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  IButtonSecondaryProps
>((props, ref) => {
  const { children, isLoading, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonSecondary ref={ref} {...buttonProps}>
      {isLoading ? ( // conditionally render loading status
        <Loader size="normal" />
      ) : (
        <>
          {leftIcon && <ButtonIcon marginEnd="8px">{leftIcon}</ButtonIcon>}
          {children}
          {rightIcon && <ButtonIcon marginStart="8px">{rightIcon}</ButtonIcon>}
        </>
      )}
    </StyledButtonSecondary>
  );
});

ButtonSecondary.displayName = 'button';

ButtonSecondary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
