import { css } from 'styled-components';

export default css`
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 4px;
  white-space: nowrap;
  height: 44px;
  user-select: none;
  appearance: none;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
