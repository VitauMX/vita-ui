import * as React from 'react';
import styled, { css } from 'styled-components';
import buttonBaseStyles from './ButtonBaseStyles';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from './Loader';

export interface IButtonTertiaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  plain?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const colorStyles = (props: IButtonTertiaryProps) => {
  if (props.isDestructive) {
    return css`
      background-color: transparent;
      color: var(--text-button-destructive);

      &:hover {
        background-color: var(--background-action-ghost-destructive-hover);
      }

      &:active {
        background-color: var(--background-action-ghost-destructive-active);
      }

      &:focus {
        box-shadow: 0px 0px 0px 2px var(--colors-red-10);
      }

      &:disabled {
        color: var(--colors-red-20);
        background-color: transparent;
      }
    `;
  }
  if (props.plain) {
    return css`
      background-color: transparent;
      color: var(--text-primary);

      &:hover {
        background-color: var(--colors-gray-10);
      }

      &:active {
        background-color: var(--colors-gray-20);
      }

      &:focus {
        box-shadow: 0px 0px 0px 2px var(--colors-gray-30);
      }

      &:disabled {
        color: var(--colors-gray-50);
        background-color: transparent;
      }
    `;
  }
  return css`
    color: var(--text-cyan);
    background-color: transparent;

    &:hover {
      background-color: var(--background-action-ghost-hover);
    }

    &:active {
      background-color: var(--background-action-ghost-active);
    }

    &:focus {
      box-shadow: 0px 0px 0px 2px var(--colors-cyan-30);
    }

    &:disabled {
      color: var(--colors-cyan-40);
      background-color: transparent;
    }
  `;
};

const StyledButtonTertiary = styled.button<IButtonTertiaryProps>`
  font-weight: var(--font-weight-semibold);
  padding: 14px 32px;
  ${(props) => colorStyles(props)}

  ${buttonBaseStyles}
`;

const StyleSpan = styled.span`
  padding-left: 0.5rem;
`;

export const ButtonTertiary = React.forwardRef<
  HTMLButtonElement,
  IButtonTertiaryProps
>((props, ref) => {
  const { children, isLoading, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonTertiary ref={ref} {...buttonProps}>
      {isLoading ? (
        <>
          {children}
          <StyleSpan>
            <Loader color="normal" />
          </StyleSpan>
        </>
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
