import * as React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children: React.ReactNode;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    width = '1em',
    height = '1em',
    viewBox = '0 0 32 32',
    children,
    ...restSvgProps
  } = props;

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={viewBox}
      {...restSvgProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
});

Icon.displayName = 'Icon';
