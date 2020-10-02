import * as React from 'react';
import styled from 'styled-components';

import { BreakpointsObject } from '@uitulkit/foundation';
import { getSpansBreakpoint } from '.';

interface UiTulkitColsGridProps {
  children?: React.ReactNode;
  className?: string;
  gridCols: number | BreakpointsObject;
  gridRows?: number | BreakpointsObject;
  height?: string;
  width?: string;
  gridDisplay?: 'grid' | 'inline-grid';
  colsGap?: number;
  autoFlow?: string;
  rowsGap?: number;
  colSize?: string;
  rowSize?: string;
}

interface DivProps {
  gridDisplay?: string;
  gridCols?: number | BreakpointsObject;
  gridRows?: number | BreakpointsObject;
  colsGap?: number;
  rowsGap?: number;
  autoFlow?: string;
  gridWidth?: string;
  gridHeight?: string;
  colSize?: string;
  rowSize?: string;
}

const Div = styled.div<DivProps>`
  display: ${(props) => (props.gridDisplay ? props.gridDisplay : 'grid')};
  ${(props) =>
    getSpansBreakpoint(
      props.gridCols ? props.gridCols : 1,
      props.colSize,
      'grid-template-columns',
      'display: none;',
      `display: ${props.gridDisplay ? props.gridDisplay : 'grid'};`
    )};
  ${(props) => getSpansBreakpoint(props.gridRows ? props.gridRows : 1, props.rowSize, 'grid-template-rows')};
  ${(props) => props.colsGap && `column-gap: ${props.colsGap}px;`}
  ${(props) => props.rowsGap && `row-gap: ${props.rowsGap}px;`}
  ${(props) => props.autoFlow && `grid-auto-flow: ${props.autoFlow}px;`}
  ${(props) => props.gridWidth && `width: ${props.gridWidth};`}
  ${(props) => props.gridHeight && `height: ${props.gridHeight};`}
`;

export const UiTulkitColsGrid = (props: UiTulkitColsGridProps) => {
  return <Div {...props}>{props.children}</Div>;
};

UiTulkitColsGrid.displayName = 'UiTulkitColsGrid';
