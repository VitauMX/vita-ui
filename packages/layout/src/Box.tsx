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
  flexGrow,
  FlexGrowProps,
  flexShrink,
  FlexShrinkProps,
  flexBasis,
  FlexBasisProps,
  justifySelf,
  JustifySelfProps,
  alignSelf,
  AlignSelfProps,
  order,
  OrderProps,
  compose,
} from 'styled-system';
import { ComponentProps } from './utils/types';

const flexItem = compose(
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order
);

interface StyledBoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexProps,
    FlexGrowProps,
    FlexShrinkProps,
    FlexBasisProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps {}

export const Box = styled.div<StyledBoxProps>`
  ${space}
  ${color}
  ${layout}
  ${flex}
  ${flexItem}
`;

export type BoxProps = ComponentProps<typeof Box>;
