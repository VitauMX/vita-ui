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
    }
  `;
};

const StyledButtonTertiary = styled.button<IButtonTertiaryProps>`
  font-weight: 600;
  padding: 14px 32px;
  ${(props) => colorStyles(props)}

  ${buttonBaseStyles}
`;

export const ButtonTertiary = React.forwardRef<
  HTMLButtonElement,
  IButtonTertiaryProps
>((props, ref) => {
  const { children, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonTertiary ref={ref} {...buttonProps}>
      {leftIcon && <ButtonIcon marginEnd="8px">{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon marginStart="8px">{rightIcon}</ButtonIcon>}
    </StyledButtonTertiary>
  );
});

ButtonTertiary.displayName = 'button';

ButtonTertiary.defaultProps = {
  iconPosition: 'left',
};
