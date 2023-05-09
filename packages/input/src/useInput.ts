import * as React from 'react';
import { useId } from '@reach/auto-id';

export type Validation = 'normal' | 'success' | 'error';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  validation?: Validation;
  icon?: React.ReactNode;
  iconButton?: React.ReactNode;
  inputButton?: React.ReactNode;
  message?: string;
  touched?: boolean;
  cleave?: boolean;
  /** Object that will contain the options for the cleave component */
  cleaveOptions?: any;
}

interface UseFieldPropGetters {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export function useInput(props: InputProps): UseFieldPropGetters {
  const { id, label: _, ...inputProps } = props;

  const inputId = useId(id);
  const labelId = useId();

  return {
    inputProps: {
      ...inputProps,
      id: inputId,
      /*
        Must always have a placeholder, see
        https://www.samanthaming.com/tidbits/88-css-placeholder-shown/#placeholder-shown-must-have-placeholder
      */
      placeholder: inputProps.placeholder || ' ',
      'aria-required': inputProps.required || undefined,
      'aria-readonly': inputProps.readOnly || undefined,
      'aria-labelledby': labelId,
    },
    labelProps: {
      id: labelId,
      htmlFor: inputId,
    },
  };
}
