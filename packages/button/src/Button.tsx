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
      '&:hover': {
        backgroundColor: '#0088CC',
      },
      '&:active': {
        backgroundColor: '#0077B3',
      },
      '&:focus': {
        boxShadow: '0px 0px 0px 2px #80D4FF inset',
      },
    },
  },
});

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'sencondary';
}

const StyledButton = styled.button`
  ${buttonBaseStyles}
  ${variants}
`;

export const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton {...props} />;
};
