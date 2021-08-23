import styled from 'styled-components';
import { variant } from 'styled-system';

const types = ['normal', 'success', 'error'] as const;

const type = variant({
  prop: 'type',
  variants: {
    normal: {
      color: '#4F6672',
    },
    success: {
      color: '#178257',
    },
    error: {
      color: '#E61300',
    },
  },
});

export interface IMessageProps {
  type?: typeof types[number];
}

export const Message = styled.p<IMessageProps>`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.5px;
  letter-spacing: 0.5%;
  ${type}
`;

Message.defaultProps = {};
