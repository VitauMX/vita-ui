import styled from 'styled-components';

export interface ILabelProps {}

export const Label = styled.label<ILabelProps>`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: regular;
  line-height: 125%;
  letter-spacing: 1%;
  color: #4f6672;
`;

Label.defaultProps = {};
