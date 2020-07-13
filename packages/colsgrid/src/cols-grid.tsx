import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitColsGridProps {
  children?: React.ReactNode;
  params?: UiTulkitColsGripParams;
  cols?: number;
  rows?: number;
  height?: string;
  width?: string;
}

interface UiTulkitColsGripParams {
  gridDisplay?: 'grid' | 'inline-grid';
  colsGap?: number;
  autoFlow?: string;
  rowsGap?: number;
  colSize?: string;
  rowSize?: string;
}

interface DivProps {
  gridDisplay?: string;
  gridCols?: number;
  gridRows?: number;
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
  grid-template-columns: repeat(${(props) => (props.gridCols ? props.gridCols : 1)}, ${(props) =>
  props.colSize ? props.colSize : '1fr'});
  grid-template-rows: ${(props) =>
    props.gridRows ? `repeat(${props.gridRows}, ${props.rowSize ? props.rowSize : '1fr'})` : 'auto'};
  ${(props) => props.colsGap && `column-gap: ${props.colsGap}px;`}
  ${(props) => props.rowsGap && `row-gap: ${props.rowsGap}px;`}
  ${(props) => props.autoFlow && `grid-auto-flow: ${props.autoFlow}px;`}
  ${(props) => props.gridWidth && `width: ${props.gridWidth};`}
  ${(props) => props.gridHeight && `height: ${props.gridHeight};`}
`;

export const UiTulkitColsGrid = (props: UiTulkitColsGridProps) => {
  return (
    <Div
      gridWidth={props?.width}
      gridCols={props?.cols}
      gridRows={props?.rows}
      gridHeight={props?.height}
      {...props.params}
    >
      {props.children}
    </Div>
  );
};
