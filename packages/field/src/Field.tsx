import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { useField, FieldProps, Validation } from './useField';

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

  color: var(--field-label-color);
`;

const StyledInput = styled.input`
  height: 54px;
  padding: 0px 20px;
  min-width: 220px;
  width: 100%;
  line-height: 22px;
  letter-spacing: 0.01em;
  background-color: var(--colors-white);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  appearance: none;
  box-sizing: border-box;
  transition: 100ms all ease-in;
  color: var(--colors-gray-70);

  border-color: var(--field-input-border-color);

  &:read-only,
  &:disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  &:disabled {
    background-color: var(--colors-gray-5);
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
      '--field-input-hover-border-color': 'var(--colors-gray-50)',
      '--field-input-focus-border-color': 'var(--colors-cyan-50)',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-cyan-20)',
      '--field-label-color': 'var(--colors-gray-70)',
      '--field-label-focus-color': 'var(--colors-gray-70)',
    },
    success: {
      '--field-input-border-color': 'var(--border-input-success-base)',
      '--field-input-hover-border-color': 'var(--border-input-success-base)',
      '--field-input-focus-border-color': 'var(--border-input-success-base)',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-green-10)',
      '--field-label-color': 'var(--text-secondary)',
      '--field-label-focus-color': 'var(--text-success)',
    },
    error: {
      '--field-input-border-color': '#FF2D1A',
      '--field-input-hover-border-color': '#FF2D1A',
      '--field-input-focus-border-color': '#FF2D1A',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-red-10)',
      '--field-label-color': 'var(--text-secondary)',
      '--field-label-focus-color': 'var(--colors-red-70)',
    },
  },
});

interface StyledFieldContainerProps {
  validation?: Validation;
}

const StyledFieldContainer = styled.div<StyledFieldContainerProps>`
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;

  ${validation}
`;

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  (props, ref) => {
    const { label, validation } = props;
    const { inputProps, labelProps } = useField(props);

    return (
      <StyledFieldContainer validation={validation}>
        <StyledInput ref={ref} {...inputProps} />
        <StyledFieldLabel {...labelProps}>{label}</StyledFieldLabel>
      </StyledFieldContainer>
    );
  }
);

export type { FieldProps } from './useField';

Field.displayName = 'Field';
Field.defaultProps = {
  validation: 'normal',
};
