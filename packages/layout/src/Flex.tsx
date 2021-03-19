import styled from 'styled-components';
import {
  alignItems,
  AlignItemsProps,
  alignContent,
  AlignContentProps,
  justifyItems,
  JustifyItemsProps,
  justifyContent,
  JustifyContentProps,
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  compose,
} from 'styled-system';
import { ComponentProps } from './utils/types';

const flex = compose(
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection
);

interface StyledFlexProps
  extends JustifyItemsProps,
    AlignItemsProps,
    JustifyContentProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignContentProps {}

export const Flex = styled.div<StyledFlexProps>`
  display: flex;
  ${flex}
`;

export type FlexProps = ComponentProps<typeof Flex>;
