import styled from 'styled-components';

export interface ICaptionProps {}

export const Caption = styled.title<ICaptionProps>`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.5%;
  color: #4f6672;
`;

Caption.defaultProps = {};
