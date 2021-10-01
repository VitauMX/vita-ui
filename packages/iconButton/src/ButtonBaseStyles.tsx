import { css } from 'styled-components';

export default css`
  border: none;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  user-select: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  appearance: none;

  transition: 220ms all ease-in-out;
  border-radius: 50%;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
