import * as React from 'react';
import { useId } from '@reach/auto-id';

export type Validation = 'normal' | 'success' | 'error';

export interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  validation?: Validation;
}

interface UseFieldPropGetters {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export function useField(props: FieldProps): UseFieldPropGetters {
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
