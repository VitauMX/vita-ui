import * as React from 'react';
import { Icon, IconProps } from './Icon';

type CreatedIconProps = Omit<IconProps, 'children'>;

interface PathOption {
  path: React.ReactElement | React.ReactElement[];
}
interface DOption {
  d: string;
}

export type CreateIconOptions = { displayName?: string } & (
  | PathOption
  | DOption
);

export function createIcon(options: CreateIconOptions) {
  const { displayName } = options;

  let innerComponent: React.ReactNode;

  if ('d' in options) {
    innerComponent = <path fill="currentColor" d={options.d} />;
  } else {
    innerComponent = options.path;
  }

  const Comp = React.forwardRef<SVGSVGElement, CreatedIconProps>(
    (props, ref) => (
      <Icon ref={ref} {...props}>
        {innerComponent}
      </Icon>
    )
  );

  Comp.displayName = displayName;

  return Comp;
}
