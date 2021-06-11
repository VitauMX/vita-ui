import * as React from 'react';
import styled from 'styled-components';

export interface ISwitchProps {
  name: string;
}

const SwitchLabel = styled.label`
  position: absolute;
  width: 42px;
  height: 24px;
  border-radius: 22px;
  background: #bac4ca;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 5.36%;
    right: 48.21%;
    top: 9.38%;
    bottom: 9.38%;

    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
`;

const SwitchBox = styled.input`
  display: none;
  &:checked + ${SwitchLabel} {
    background: #1ab3ff;
    &::after {
      left: 48.21%;
      right: 5.36%;
      top: 9.38%;
      bottom: 9.38%;

      background: #ffffff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
    }
  }
`;

export const Switch = React.forwardRef<HTMLInputElement, ISwitchProps>(
  (props, ref) => (
    <>
      <SwitchBox id={props.name} type="checkbox" role="switch" ref={ref} />
      <SwitchLabel htmlFor={props.name} />
    </>
  )
);

Switch.displayName = 'Switch';
