import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';
import { ButtonIcon } from './ButtonIcon';

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
      background-color: transparent;
    }
  `;
};

export const StyledButtonSecondary = styled.button<IButtonSecondaryProps>`
  color: #0077b3;
  font-weight: 600;

  ${colorStyles}
  ${buttonBaseStyles}
  ${size}
`;

export const ButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  IButtonSecondaryProps
>((props, ref) => {
  const { children, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonSecondary ref={ref} {...buttonProps}>
      {leftIcon && <ButtonIcon marginEnd="8px">{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon marginStart="8px">{rightIcon}</ButtonIcon>}
    </StyledButtonSecondary>
  );
});

ButtonSecondary.displayName = 'button';

ButtonSecondary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
