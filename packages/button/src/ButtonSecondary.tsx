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
  loading?: boolean;
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
const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: isLoading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
    border-width: 2px;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes isLoading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  IButtonSecondaryProps
>((props, ref) => {
  const { children, loading, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonSecondary ref={ref} {...buttonProps}>
      {loading ? (
        <StyledLoader>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StyledLoader>
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
