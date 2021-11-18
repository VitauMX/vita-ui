import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';
import { ButtonIcon } from './ButtonIcon';

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
  loading?: boolean;
}

const colorStyles = (props: IButtonPrimaryProps) => {
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

const StyledButtonPrimary = styled.button<IButtonPrimaryProps>`
  color: #ffffff;
  font-weight: 600;
  ${(props) => colorStyles(props)}

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

export const ButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  IButtonPrimaryProps
>((props, ref) => {
  const { children, loading, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonPrimary ref={ref} {...buttonProps}>
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
    </StyledButtonPrimary>
  );
});

ButtonPrimary.displayName = 'button';

ButtonPrimary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
