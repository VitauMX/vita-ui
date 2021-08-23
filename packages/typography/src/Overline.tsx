import styled from 'styled-components';

export interface IOverlineProps {}

export const Overline = styled.p<IOverlineProps>`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 125%;
  letter-spacing: 1.6%;
  text-transform: uppercase;
  color: #4f6672;
`;

Overline.defaultProps = {};
