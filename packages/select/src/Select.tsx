import React, { FC, ElementType, useRef } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5;

  /* select, Textarea */
  > select {
    // Safari
    -webkit-appearance: none;
    padding-right: 16px;
  }

  // Mozilla
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #022a3b;
  }

  i.chevron {
    z-index: -1;
  }

  i.disabled-icon.chevron {
    color: #b3bfc4;
  }

  > select:not(:focus)[select-data=''] + label {
    z-index: -1;
  }

  > input,
  > select {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: #b3bfc4;
    border-top-color: transparent;
    border-radius: 4px;
    padding: 9px 12px;
    width: 100%;
    height: inherit;
    color: #355562;
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: #355562;
    transition: border 0.2s, box-shadow 0.2s;
    padding-right: 16px;
  }

  /* label */
  > input + label,
  > select + label {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    border-color: #b3bfc4;
    width: 100%;
    max-height: 100%;
    color: #80949d;
    font-size: 14px;
    line-height: 4px;
    cursor: text;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
    white-space: nowrap;
    // Label unselectable
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Corners */
  > input + label::before,
  > input + label::after,
  > select + label::before,
  > select + label::after {
    content: '';
    display: block;
    box-sizing: border-box;
    border-top: solid 1px;
    border-top-color: #b3bfc4;
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  > input + label::before,
  > select + label::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  > input + label::after,
  > select + label::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  .assistive-text {
    margin-left: 8px;
    font-size: 14px;
    color: #80949d;
  }

  > input::placeholder {
    opacity: 0;
  }

  /* Hover */
  &:hover > input,
  &:hover > select {
    border-color: #355562;
    border-top-color: transparent;
  }

  &:hover > input + label::before,
  &:hover > input + label::after,
  &:hover > select + label::before,
  &:hover > select + label::after {
    border-top-color: #355562;
  }

  &:hover > input:not(:focus):not(:disabled):placeholder-shown,
  &:hover > select:not(:focus):not(:disabled)[select-data=''] {
    border-color: #355562;
  }

  /* Placeholder-shown */
  > input:not(:focus):placeholder-shown,
  > select:not(:focus)[select-data=''] {
    border-top-color: #b3bfc4;
  }

  > input:not(:focus):placeholder-shown + label,
  > select:not(:focus)[select-data=''] + label {
    font-size: inherit;
    line-height: 44px;
  }

  > input:not(:focus):placeholder-shown + label::before,
  > input:not(:focus):placeholder-shown + label::after,
  > select:not(:focus)[select-data=''] + label::before,
  > select:not(:focus)[select-data=''] + label::after {
    border-top-color: transparent;
  }

  /* Focus */
  > input:focus,
  > select:focus {
    border-color: #00aaff;
    border-top-color: transparent;
    box-shadow: inset 1px 0 #00aaff, inset -1px 0 #00aaff, inset 0 -1px #00aaff;
    outline: none;
  }

  > input:focus + label,
  > select:focus + label {
    color: #00aaff;
  }

  > input:focus + label::before,
  > input:focus + label::after,
  > select:focus + label::before,
  > select:focus + label::after {
    border-top-color: #00aaff;
    box-shadow: inset 0 1px #00aaff;
  }

  > input:focus::placeholder {
    opacity: 1;
  }

  /* Disabled */
  > input:disabled,
  > input:disabled + label,
  > select:disabled,
  > select:disabled + label {
    border-color: #ccd4d8 !important;
    border-top-color: transparent !important;
    color: #9aaab1 !important;
    pointer-events: none;
  }

  > input:disabled + label::before,
  > input:disabled + label::after,
  > select:disabled + label::before,
  > select:disabled + label::after {
    border-top-color: #ccd4d8 !important;
  }

  > input:disabled:placeholder-shown,
  > input:disabled:placeholder-shown + label,
  > select:disabled:placeholder-shown,
  > select:disabled:placeholder-shown + label {
    border-top-color: #ccd4d8 !important;
  }

  > input:disabled:placeholder-shown + label::before,
  > input:disabled:placeholder-shown + label::after,
  > select:disabled:placeholder-shown + label::before,
  > select:disabled:placeholder-shown + label::after {
    border-top-color: transparent !important;
  }

  > input:disabled + label + p,
  > select:disabled + label + p {
    color: #2dd28d !important;
  }

  /* Error */
  &.outlined-error {
    &:not(.outlined-password) {
      input:not(:disabled) {
        background-image: url('../../assets/images/error.svg');
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: calc(1em + 0.375rem) calc(1em + 0.375rem);
        padding-right: calc(1.5em + 0.75rem);
      }
    }

    > input + label,
    > select + label {
      color: #cc4752;
    }

    > input,
    > input + label,
    > select,
    > select + label {
      border-color: #cc4752;
      border-top-color: transparent;
    }

    > input + label::before,
    > input + label::after,
    > select + label::before,
    > select + label::after {
      border-top-color: #cc4752;
    }

    > input:placeholder-shown,
    > input:placeholder-shown + label,
    > select:placeholder-shown,
    > select:placeholder-shown + label {
      border-top-color: #cc4752;
      color: #cc4752;
    }

    > input:placeholder-shown + label::before,
    > input:placeholder-shown + label::after,
    > select:placeholder-shown + label::before,
    > select:placeholder-shown + label::after {
      border-top-color: transparent;
    }

    .assistive-text {
      color: #cc4752;
    }

    /* Error && Hover */
    &:hover > input,
    &:hover > select {
      border-color: #e6505c;
      border-top-color: transparent;
    }

    &:hover > input + label::before,
    &:hover > input + label::after,
    &:hover > select + label::before,
    &:hover > select + label::after {
      border-top-color: #e6505c;
    }

    &:hover > input:not(:focus):not(:disabled):placeholder-shown,
    &:hover > select:not(:focus):not(:disabled)[select-data=''] {
      border-color: #e6505c;
    }

    /* Error && Focus */
    > input:focus,
    > select:focus {
      border-color: #cc4752;
      border-top-color: transparent;
      box-shadow: inset 1px 0 #cc4752, inset -1px 0 #cc4752,
        inset 0 -1px #cc4752;
      outline: none;
    }

    > input:focus + label,
    > select:focus + label {
      color: #cc4752;
    }

    > input:focus + label::before,
    > input:focus + label::after,
    > select:focus + label::before,
    > select:focus + label::after {
      border-top-color: #cc4752;
      box-shadow: inset 0 1px #cc4752;
    }

    > select:not(:focus)[select-data=''] {
      border-top-color: #cc4752;
    }
  }

  /* Success */
  &.outlined-success {
    &:not(.outlined-password) {
      input:not(:disabled) {
        background-image: url('../../assets/images/success.svg');
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
        padding-right: calc(1.5em + 0.75rem);
      }
    }
    > input + label,
    > select + label {
      color: #2dd28d;
    }

    > input,
    > input + label,
    > select,
    > select + label {
      border-color: #2dd28d;
      border-top-color: transparent;
    }

    > input + label::before,
    > input + label::after,
    > select + label::before,
    > select + label::after {
      border-top-color: #2dd28d;
    }

    > input:placeholder-shown,
    > input:placeholder-shown + label,
    > select:placeholder-shown,
    > select:placeholder-shown + label {
      border-top-color: #2dd28d;
      color: #e6505c;
    }

    > input:placeholder-shown + label::before,
    > input:placeholder-shown + label::after,
    > select:placeholder-shown + label::before,
    > select:placeholder-shown + label::after {
      border-top-color: transparent;
    }

    .assistive-text {
      color: #2dd28d;
    }

    /* Success && Hover */
    &:hover > input,
    &:hover > select {
      border-color: #1fad72;
      border-top-color: transparent;
    }

    &:hover > input + label::before,
    &:hover > input + label::after,
    &:hover > select + label::before,
    &:hover > select + label::after {
      border-top-color: #1fad72;
    }

    &:hover > input:not(:focus):not(:disabled):placeholder-shown,
    &:hover > select:not(:focus):not(:disabled)[select-data=''] {
      border-color: #1fad72;
    }

    /* Success && Focus */
    > input:focus,
    > select:focus {
      border-color: #2dd28d;
      border-top-color: transparent;
      box-shadow: inset 1px 0 #2dd28d, inset -1px 0 #2dd28d,
        inset 0 -1px #2dd28d;
      outline: none;
    }

    > input:focus + label,
    > select:focus + label {
      color: #2dd28d;
    }

    > input:focus + label::before,
    > input:focus + label::after,
    > select:focus + label::before,
    > select:focus + label::after {
      border-top-color: #2dd28d;
      box-shadow: inset 0 1px #2dd28d;
    }

    > select:not(:focus)[select-data=''] {
      border-top-color: #2dd28d;
    }
  }

  i.chevron {
    display: flex;
    color: #355562;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 8px;
    top: 6px;
    background-color: transparent;
    border: none;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    outline: none;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
  }
`;

export interface Props {
  component?: ElementType;
  dataCheckout?: string;
  disabled?: boolean;
  error?: string;
  id: string;
  label: string;
  name: string;
  isValid?: boolean;
  options: Array<{
    value: string;
    text: string;
  }>;
  required?: boolean;
  touched?: boolean;
}

const pascalCase = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// export const Select: React.FC<Props> = () => {
//   return <StyledSelect />;
// };

export const Select: FC<Props> = (props: Props) => {
  const {
    component: Component = 'select',
    dataCheckout,
    disabled,
    error,
    id,
    label,
    name,
    isValid,
    options,
    required,
    touched,
    ...rest
  } = props;

  const selectDiv = classNames('outlined-div', {
    'outlined-error': touched && error,
    'outlined-success': touched && isValid,
  });

  const icon = classNames('chevron fas fa-chevron-down', {
    'disabled-icon': disabled,
  });

  const selectEl = useRef(null);

  return (
    <>
      <StyledSelect className={selectDiv}>
        <Component
          data-checkout={dataCheckout}
          id={id}
          name={name}
          disabled={disabled}
          component={Component !== 'select' ? 'select' : undefined}
          innerRef={Component !== 'select' ? selectEl : undefined}
          {...rest}
        >
          <option value="">{''}</option>

          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </Component>
        <label htmlFor={id}>
          {pascalCase(label)}
          {required ? ' *' : undefined}
        </label>

        <i className={icon} aria-hidden="true"></i>

        {touched ? (
          <p className="assistive-text">{error || isValid}</p>
        ) : undefined}
      </StyledSelect>
    </>
  );
};

Select.defaultProps = {
  isValid: false,
  label: 'label',
  touched: false,
  options: [],
};
