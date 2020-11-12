import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 13px 20px
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;
  font-size: 16px;
  line-height: 1;
`;

const Button: React.FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
