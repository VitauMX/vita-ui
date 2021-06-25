import * as React from 'react';
import { useId } from '@reach/auto-id';

export interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface UseFieldPropGetters {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export function useField(props: FieldProps): UseFieldPropGetters {
  const { id, label: _, ...restInputProps } = props;

  const innerId = useId(id);

  return {
    inputProps: {
      ...restInputProps,
      id: innerId,
      /*
        Must always have a placeholder, see
        https://www.samanthaming.com/tidbits/88-css-placeholder-shown/#placeholder-shown-must-have-placeholder
      */
      placeholder: restInputProps.placeholder || ' ',
    },
    labelProps: {
      htmlFor: innerId,
    },
  };
}
