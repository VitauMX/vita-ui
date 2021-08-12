import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { useInput, InputProps, Validation } from './useInput';

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
  max-width: 63%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #4f6672;
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
  height: 54px;
  padding: 0px 16px;
  min-width: 220px;
  width: 100%;
  line-height: 22px;
  letter-spacing: 0.01em;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${(props) =>
    props.touched && 'var(--field-input-hover-border-color)'};
  appearance: none;
  box-sizing: border-box;
  box-shadow: ${(props) => props.touched && 'var(--field-input-box-shadow)'};
  transition: border 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
  color: #4f6672;
  padding-right: ${(props) =>
    props.icon || props.iconButton ? '48px' : '16px'};
  padding-right: ${(props) => (props.inputButton ? '94px' : '16px')};
  overflow: visible;
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
      color: #4f6672;
      font-size: 12px;
      padding-top: 8px;
      padding-bottom: 30px;
    }
  }

  &:-webkit-autofill {
    padding-top: 24px;
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
  display: inline-flex;
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
  position: relative;
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
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
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
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
