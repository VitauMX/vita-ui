import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { useField, FieldProps, Validation } from './useField';

const StyledFieldLabel = styled.label`
  position: absolute;
  padding: 16px 20px;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  cursor: text;
  pointer-events: none;
  font-weight: 600;
  transition: 100ms all ease-in;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--field-label-color);
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
  color: #4f6672;

  border-color: var(--field-input-border-color);

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

  &:hover {
    border-color: var(--field-input-hover-border-color);
  }

  &:focus {
    outline: 0;

    border-color: var(--field-input-focus-border-color);
    box-shadow: var(--field-input-box-shadow);

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
      color: var(--field-label-focus-color);
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
      color: var(--field-label-focus-color);
      font-size: 12px;
      padding-top: 8px;
      padding-bottom: 30px;
    }
  }
`;

const validation = variant<
  Record<string, any> | React.CSSProperties,
  Validation
>({
  prop: 'validation',
  variants: {
    normal: {
      '--field-input-border-color': '#bac4ca',
      '--field-input-hover-border-color': '#8698a2',
      '--field-input-focus-border-color': '#1ab3ff',
      '--field-input-box-shadow': '0 0 0 2px #b3e5ff',
      '--field-label-color': '#4f6672',
      '--field-label-focus-color': '#4f6672',
    },
    success: {
      '--field-input-border-color': '#22C383',
      '--field-input-hover-border-color': '#22C383',
      '--field-input-focus-border-color': '#22C383',
      '--field-input-box-shadow': '0 0 0 2px #93ECC8',
      '--field-label-color': '#4f6672',
      '--field-label-focus-color': '#178257',
    },
    error: {
      '--field-input-border-color': '#FF2D1A',
      '--field-input-hover-border-color': '#FF2D1A',
      '--field-input-focus-border-color': '#FF2D1A',
      '--field-input-box-shadow': '0 0 0 2px #FF8A7F',
      '--field-label-color': '#4f6672',
      '--field-label-focus-color': '#E61300',
    },
  },
});

interface StyledFieldContainerProps {
  validation?: Validation;
}
interface StyledInputMessageProps {
  validation?: Validation;
}

const StyledFieldContainer = styled.div<StyledFieldContainerProps>`
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;

  ${validation}
`;
const StyledInputMessage = styled.span<StyledInputMessageProps>`
  margin-top: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: var(--field-label-focus-color);
  ${validation}
`;

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  (props, ref) => {
    const { label, validation, message } = props;
    const { inputProps, labelProps } = useField(props);

    return (
      <>
        <StyledFieldContainer validation={validation}>
          <StyledInput ref={ref} {...inputProps} />
          <StyledFieldLabel {...labelProps}>{label}</StyledFieldLabel>
        </StyledFieldContainer>
        {message && (
          <StyledInputMessage validation={validation}>
            {message}
          </StyledInputMessage>
        )}
      </>
    );
  }
);

export type { FieldProps } from './useField';

Field.displayName = 'Field';
Field.defaultProps = {
  validation: 'normal',
};
