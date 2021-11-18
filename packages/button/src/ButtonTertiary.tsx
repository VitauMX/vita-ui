import * as React from 'react';
import styled, { css } from 'styled-components';
import buttonBaseStyles from './ButtonBaseStyles';
import { ButtonIcon } from './ButtonIcon';

export interface IButtonTertiaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  plain?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

const colorStyles = (props: IButtonTertiaryProps) => {
  if (props.isDestructive) {
    return css`
      background-color: transparent;
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
        background-color: transparent;
      }
    `;
  }
  if (props.plain) {
    return css`
      background-color: transparent;
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
        background-color: transparent;
      }
    `;
  }
  return css`
    color: #0077b3;
    background-color: transparent;

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
      background-color: transparent;
    }
  `;
};

const StyledButtonTertiary = styled.button<IButtonTertiaryProps>`
  font-weight: 600;
  padding: 14px 32px;
  ${(props) => colorStyles(props)}

  ${buttonBaseStyles}
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

export const ButtonTertiary = React.forwardRef<
  HTMLButtonElement,
  IButtonTertiaryProps
>((props, ref) => {
  const { children, loading, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonTertiary ref={ref} {...buttonProps}>
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
    </StyledButtonTertiary>
  );
});

ButtonTertiary.displayName = 'button';

ButtonTertiary.defaultProps = {
  iconPosition: 'left',
};
