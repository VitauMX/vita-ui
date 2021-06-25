import * as React from 'react';
import styled from 'styled-components';
import { useField, FieldProps } from './useField';

const StyledFieldLabel = styled.label`
  position: absolute;
  padding: 16px 20px;
  height: 100%;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  cursor: text;
  pointer-events: none;
  font-weight: 600;
  transition: 100ms all ease-in;
  border: 1px solid transparent;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledInput = styled.input`
  height: 54px;
  padding: 0px 20px;
  min-width: 220px;
  width: 100%;
  line-height: 22px;
  letter-spacing: 0.01em;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  appearance: none;
  box-sizing: border-box;
  transition: 100ms all ease-in;

  &:read-only,
  &:disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  &:disabled {
    background-color: #f1f3f4;
  }

  &::placeholder {
    opacity: 0;
    transition: inherit;
  }

  &:focus {
    outline: 0;

    &::placeholder {
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    border-width: 2px;
    & ~ label {
      border-width: 2px;
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    padding-top: 24px;
    padding-bottom: 8px;

    & ~ label {
      font-size: 12px;
      padding-top: 8px;
      padding-bottom: 30px;
    }
  }

  /* Fix for autofill, see https://stackoverflow.com/questions/55427966/inputnotplaceholder-shown-label-selector-does-not-work-with-autofill */
  &:-webkit-autofill {
    padding-top: 24px;
    padding-bottom: 8px;

    & ~ label {
      font-size: 12px;
      padding-top: 8px;
      padding-bottom: 30px;
    }
  }
`;

const StyledFieldContainer = styled.div`
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #4f6672;

  & > input {
    border-color: #bac4ca;
  }

  & > input:hover {
    border-color: #8698a2;
  }

  & > input:focus {
    border-color: #1ab3ff;
    box-shadow: 0 0 0 2px #b3e5ff;
  }
`;

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  (props, ref) => {
    const { label } = props;
    const { inputProps, labelProps } = useField(props);

    return (
      <StyledFieldContainer>
        <StyledInput ref={ref} {...inputProps} />
        <StyledFieldLabel {...labelProps}>{label}</StyledFieldLabel>
      </StyledFieldContainer>
    );
  }
);

Field.displayName = 'Field';
