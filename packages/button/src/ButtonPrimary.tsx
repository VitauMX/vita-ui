import React, { forwardRef } from 'react';
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
  size?: Size;
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

const renderButtonContent = (props: IButtonPrimaryProps) => {
  const { children, isLoading, icon, iconPosition } = props;

  if (isLoading) {
    return <Loader color="white" />;
  }

  const leftIcon =
    icon && iconPosition === 'left' ? (
      <ButtonIcon marginEnd="8px">{icon}</ButtonIcon>
    ) : null;
  const rightIcon =
    icon && iconPosition === 'right' ? (
      <ButtonIcon marginStart="8px">{icon}</ButtonIcon>
    ) : null;

  return (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );
};

export const ButtonPrimary = forwardRef<HTMLButtonElement, IButtonPrimaryProps>(
  (props, ref) => {
    const { children, isLoading, icon, iconPosition, ...buttonProps } = props;

    return (
      <StyledButtonPrimary ref={ref} {...buttonProps}>
        {renderButtonContent(props)}
      </StyledButtonPrimary>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

ButtonPrimary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
