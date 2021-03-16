import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flex,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexProps,
} from 'styled-system';
import { ComponentProps } from './utils/types';

interface StyledBoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexProps {}

export const Box = styled.div<StyledBoxProps>`
  ${space}
  ${color}
  ${layout}
  ${flex}
`;

export type BoxProps = ComponentProps<typeof Box>;
