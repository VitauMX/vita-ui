import * as React from 'react';

export type Validation = 'normal' | 'success' | 'error';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  validation?: Validation;
}

interface UseFieldPropGetters {
  IconButtonProps: React.ButtonHTMLAttributes<HTMLInputElement>;
}

export function useInput(props: IconButtonProps): UseFieldPropGetters {
  const { ...iconButtonProps } = props;

  return {
    IconButtonProps: {
      ...iconButtonProps,
      /*
        Must always have a placeholder, see
        https://www.samanthaming.com/tidbits/88-css-placeholder-shown/#placeholder-shown-must-have-placeholder
      */
    },
  };
}
