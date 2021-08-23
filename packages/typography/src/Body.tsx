import styled from 'styled-components';
import { variant } from 'styled-system';

const types = ['big', 'bold', 'normal'] as const;
type Type = typeof types[number];

const TYPE: Record<Uppercase<Type>, Type> = {
  BIG: 'big',
  BOLD: 'bold',
  NORMAL: 'normal',
};

const type = variant({
  prop: 'type',
  variants: {
    big: {
      fontSize: '20px',
      fontWeight: 'regular',
    },
    bold: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    normal: {
      fontSize: '16px',
      fontWeight: 'regular',
    },
  },
});

export interface IBodyProps {
  type?: typeof types[number];
}

export const Body = styled.p<IBodyProps>`
  display: block;
  font-family: 'Open Sans', sans-serif;
  line-height: 150%;
  color: #4f6672;
  ${type}
`;

Body.defaultProps = {
  type: TYPE.NORMAL,
};
