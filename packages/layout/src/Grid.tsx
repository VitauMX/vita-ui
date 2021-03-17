import styled from 'styled-components';
import {
  grid as systemGrid,
  GridProps as SystemGridProps,
  justifyItems,
  JustifyItemsProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  alignContent,
  AlignContentProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  gridArea,
  GridAreaProps,
  compose,
} from 'styled-system';
import { ComponentProps } from './utils/types';

const grid = compose(
  systemGrid,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent
);

interface StyledGridProps
  extends SystemGridProps,
    JustifyItemsProps,
    AlignItemsProps,
    JustifyContentProps,
    AlignContentProps {}

export const Grid = styled.div<StyledGridProps>`
  display: grid;
  ${grid};
`;

export type GridProps = ComponentProps<typeof Grid>;

const gridItem = compose(gridColumn, gridRow, gridArea);

interface StyledGridItemProps
  extends GridColumnProps,
    GridRowProps,
    GridAreaProps {}

export const GridItem = styled.div<StyledGridItemProps>`
  ${gridItem}
`;

export type GridItemProps = ComponentProps<typeof GridItem>;
