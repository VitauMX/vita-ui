import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { useInput, InputProps, Validation } from './useInput';

const StyledFieldLabel = styled.label`
  position: absolute;
  padding: 10px 18px;
  left: 0;
  top: 0;
  
  transform-origin: 0 0;
  cursor: text;
  pointer-events: none;
  font-weight: normal;
  transition: 100ms all ease-in;
  max-width: 63%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-secondary);
`;
interface StyledInputProps {
  icon?: boolean;
  iconButton?: boolean;
  inputButton?: boolean;
  touched?: boolean;
}
interface StyledFieldContainerProps {
  validation?: Validation;
}
const StyledInput = styled.input<StyledInputProps>`
  height: 44px;
  padding: 0px 16px;
  width: 100%;
  line-height: 22px;
  letter-spacing: 0.01em;
  background-color: var(--colors-white);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  appearance: none;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
  color: var(--text-secondary);
  padding-right: ${(props) =>
    (props.icon && props.iconButton && '96px') ||
    (props.icon && props.inputButton && '110px') ||
    (props.icon && '36px') ||
    (props.iconButton && '48px') ||
    (props.inputButton && '94px') ||
    '16px'};
  overflow: visible;
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
    border-color: ${(props) => props.disabled && 'var(--colors-gray-30)'};
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
    border-width: ${(props) => props.disabled && '1px'};

    & ~ label {
      border-width: 2px;
      border-width: ${(props) => props.disabled && '1px'};
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    padding-top: 22px;
    padding-bottom: 8px;

    & ~ label {
      color: var(--colors-gray-70);
      font-size: 12px;
      padding-top: 6px;
      padding-bottom: 30px;
    }
  }

  &:-webkit-autofill {
    padding-top: 22px;
    padding-bottom: 8px;

    & ~ label {
      color: #4f6672;
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
      '--field-input-border-color': 'var(--colors-gray-30)',
      '--field-input-hover-border-color': 'var(--colors-gray-50)',
      '--field-input-focus-border-color': 'var(--colors-cyan-50)',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-cyan-20)',
      '--field-label-color': 'var(--colors-gray-70)',
      '--field-label-focus-color': 'var(--text-secondary)',
    },
    success: {
      '--field-input-border-color': 'var(--border-input-success-base)',
      '--field-input-hover-border-color': 'var(--border-input-success-hover)',
      '--field-input-focus-border-color': 'var(--colors-green-50)',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-green-10)',
      '--field-label-color': 'var(--colors-gray-70)',
      '--field-label-focus-color': 'var(--text-success)',
    },
    error: {
      '--field-input-border-color': '#FF2D1A',
      '--field-input-hover-border-color': '#FF2D1A',
      '--field-input-focus-border-color': '#FF2D1A',
      '--field-input-box-shadow': '0 0 0 2px var(--colors-red-10)',
      '--field-label-color': 'var( --text-secondary)',
      '--field-label-focus-color': 'var(--colors-red-70)',
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
  font-family: var(--font-family-open-sans);
  font-size: var(--font-size-base);
  display: flex;
  align-items: center;
  white-space: nowrap;

  box-sizing: border-box;
  ${validation}
`;

const StyledInputIconContainer = styled.div`
  position: absolute;
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  right: 0%;
  margin-right: 16px;
  grid-gap: 8px;
`;
const StyledInputIcon = styled.span`
  align-self: center;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
  }
`;
const StyledInputButtonContainer = styled.div`
  width: 62px;
  height: 32px;

  button {
    width: 100%;
    height: 100%;
  }
`;
const StyledInputMessage = styled.span<StyledInputMessageProps>`
  margin-top: 4px;
  font-family: var(--font-family-open-sans);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-normal);
  color: var(--field-label-focus-color);
  ${validation}
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      validation,
      icon,
      iconButton,
      inputButton,
      message,
      touched,
    } = props;
    const { inputProps, labelProps } = useInput(props);

    return (
      <>
        <StyledFieldContainer validation={validation}>
          <StyledInput
            icon={icon ? true : false}
            iconButton={iconButton ? true : false}
            inputButton={inputButton ? true : false}
            touched={touched}
            ref={ref}
            {...inputProps}
          />
          <StyledFieldLabel {...labelProps}>{label}</StyledFieldLabel>
          <StyledInputIconContainer>
            {icon && <StyledInputIcon>{icon}</StyledInputIcon>}
            {iconButton && <StyledInputIcon>{iconButton}</StyledInputIcon>}
            {inputButton && (
              <StyledInputButtonContainer>
                {inputButton}
              </StyledInputButtonContainer>
            )}
          </StyledInputIconContainer>
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
export type { InputProps } from './useInput';

Input.displayName = 'Input';
Input.defaultProps = {
  validation: 'normal',
};
