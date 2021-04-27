import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import buttonBaseStyles from './ButtonStyles';

const variants = variant({
  variants: {
    primary: {
      color: '#FFFFFF',
      borderWidth: '0px',
      padding: '0px 32px',
      fontFamily: 'Open Sans',
      backgroundColor: '#0099E6',
      '&:hover:enabled': {
        backgroundColor: '#0088CC',
      },
      '&:active:enabled': {
        backgroundColor: '#0077B3',
      },
      '&:focus:enabled': {
        boxShadow: '0px 0px 0px 2px #80D4FF',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: '#80D4FF',
      },
    },
  },
});

const destructive = variant({
  prop: 'destructive',
  variants: {
    true: {
      backgroundColor: '#FF2D1A',
      '&:hover:enabled': {
        backgroundColor: '#CC1100',
      },
      '&:active:enabled': {
        backgroundColor: '#B30F00',
      },
      '&:focus:enabled': {
        boxShadow: '0px 0px 0px 2px #FF8A7F',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: '#FF5B4C',
      },
    },
  },
});

const size = variant({
  prop: 'size',
  variants: {
    large: {
      height: '56px',
    },
    small: {
      padding: '0px 16px',
      height: '32px',
    },
  },
});

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  destructive?: boolean;
  size?: 'large' | 'small';
  disabled?: boolean;
}

const StyledButton = styled.button`
  ${buttonBaseStyles}
  ${variants}
  ${destructive}
  ${size}
`;

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    return <StyledButton ref={ref} disabled={props.disabled} {...props} />;
  }
);

Button.displayName = 'Button';
