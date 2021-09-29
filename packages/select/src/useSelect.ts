import * as React from 'react';
import { useId } from '@reach/auto-id';

export type Validation = 'normal' | 'success' | 'error';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  validation?: Validation;
  icon?: React.ReactNode;
  iconButton?: React.ReactNode;
  inputButton?: React.ReactNode;
  message?: string;
  touched?: boolean;
  options: Array<{
    value: string;
    text: string;
  }>;
}

interface UseFieldPropGetters {
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement>;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export function useInput(props: SelectProps): UseFieldPropGetters {
  const { id, label: _, ...selectProps } = props;

  const inputId = useId(id);
  const labelId = useId();

  return {
    selectProps: {
      ...selectProps,
      id: inputId,
      /*
        Must always have a placeholder, see
        https://www.samanthaming.com/tidbits/88-css-placeholder-shown/#placeholder-shown-must-have-placeholder
      */
      placeholder: selectProps.placeholder || ' ',
      'aria-required': selectProps.required || undefined,
      'aria-readonly': selectProps.readOnly || undefined,
      'aria-labelledby': labelId,
    },
    labelProps: {
      id: labelId,
      htmlFor: inputId,
    },
  };
}
