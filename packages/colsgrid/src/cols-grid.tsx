import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitColsGridProps {
  children?: React.ReactNode;
  params?: UiTulkitColsGripParams;
  height?: string;
  width?: string;
}

interface UiTulkitColsGripParams {}

interface DivProps {
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gridWidth?: string;
  gridHeight?: string;
}

const Div = styled.div<DivProps>`
  ${(props) => props.gridWidth && `width: ${props.gridWidth};`}
  ${(props) => props.gridHeight && `height: ${props.gridHeight};`}
  display: flex;
`;

export const UiTulkitColsGrid = (props: UiTulkitColsGridProps) => {
  return (
    <Div gridWidth={props?.width} gridHeight={props?.height}>
      {props.children}
    </Div>
  );
};
