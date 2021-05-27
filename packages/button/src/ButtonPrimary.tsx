import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonBaseStyles';

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

export interface IButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDestructive?: boolean;
  size?: typeof sizes[number];
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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

const iconStyles = (props: IButtonPrimaryProps) => {
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

const StyledButtonPrimary = styled.button<IButtonPrimaryProps>`
  color: #ffffff;
  font-weight: 600;
  ${(props) => colorStyles(props)}
  ${(props) => (props.icon ? iconStyles(props) : null)}

  ${buttonBaseStyles}
  ${size}
  ${(props) => (props.icon && !(props.size === 'small') ? icon : null)}
  ${(props) => (props.icon && props.size === 'small' ? smallBtnIcon : null)}
`;

export const ButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  IButtonPrimaryProps
>((props, ref) => {
  const { children, ...buttonProps } = props;

  const leftIcon =
    props.icon && props.iconPosition === 'left' ? props.icon : null;
  const rightIcon =
    props.icon && props.iconPosition == 'right' ? props.icon : null;

  return (
    <StyledButtonPrimary ref={ref} {...buttonProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButtonPrimary>
  );
});

ButtonPrimary.displayName = 'button';

ButtonPrimary.defaultProps = {
  size: SIZE.MEDIUM,
  iconPosition: 'left',
};
