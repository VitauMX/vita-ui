import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

export type ColorLoader = 'normal' | 'white';
export type SizeLoader = 'normal' | 'lg';

const color = variant<Record<string, any> | React.CSSProperties, ColorLoader>({
  prop: 'color',
  variants: {
    normal: {
      '--loader-color': 'var(--colors-cyan-60)',
    },
    white: {
      '--loader-color': 'var(--colors-white)',
    },
  },
});

const size = variant<Record<string, any> | React.CSSProperties, SizeLoader>({
  prop: 'size',
  variants: {
    normal: {
      '--loader-size': '1.5rem',
      '--loader-border-width': '3px',
    },
    lg: {
      '--loader-size': '3rem',
      '--loader-border-width': '6px',
    },
  },
});

interface StyledLoaderProps {
  color?: ColorLoader;
  size?: SizeLoader;
}

const StyledLoader = styled.div<StyledLoaderProps>`
  display: inline-block;
  position: relative;
  width: var(--loader-size);
  height: var(--loader-size);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: var(--loader-border-width) solid var(--loader-color);
    border-radius: 50%;
    animation: isLoading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--loader-color) transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes isLoading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${color}
  ${size}
`;

export interface LoaderProps extends StyledLoaderProps {
  // Add any additional props here if needed
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { color, size, ...rest } = props;

  return (
    <StyledLoader ref={ref} color={color} size={size} {...rest}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
});

Loader.displayName = 'Loader';

Loader.defaultProps = {
  color: 'normal',
  size: 'normal',
};
