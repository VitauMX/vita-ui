import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';

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

const icon = variant({
  prop: 'iconPosition',
  variants: {
    left: {
      paddingLeft: '24px',
    },
    right: {
      paddingRight: '24px',
    },
  },
});

const smallBtnIcon = variant({
  prop: 'iconPosition',
  variants: {
    left: {
      paddingLeft: '12px',
    },
    right: {
      paddingRight: '12px',
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
    }
  `;
};

const iconStyles = (props: IButtonSecondaryProps) => {
  if (props.icon && props.iconPosition === 'left') {
    return css`
      svg {
        width: 16px;
        height: 16px;
        padding-right: 8px;
      }
    `;
  }
  return css`
    svg {
      width: 16px;
      height: 16px;
      padding-left: 8px;
    }
  `;
};

export const StyledButtonSecondary = styled.button<IButtonSecondaryProps>`
  color: #0077b3;
  font-weight: 600;
  ${(props) => (props.icon ? iconStyles(props) : null)}

  ${colorStyles}
  ${buttonBaseStyles}
  ${size}
  ${(props) => (props.icon && !(props.size === 'small') ? icon : null)}
  ${(props) => (props.icon && props.size === 'small' ? smallBtnIcon : null)}
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
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButtonSecondary>
  );
});

ButtonSecondary.displayName = 'button';

ButtonSecondary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
