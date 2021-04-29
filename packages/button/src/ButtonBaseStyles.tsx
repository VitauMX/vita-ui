import { css } from 'styled-components';

export default css`
  border: none;
  font-family: inherit;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1;
  user-select: none;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  appearance: none;

  transition: 220ms all ease-in-out;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }
`;
