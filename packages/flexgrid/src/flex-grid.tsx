import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitFlexGridProps {
  children?: React.ReactNode;
  params?: UiTulkitFlexGripParams;
  height?: string;
  width?: string;
}

interface UiTulkitFlexGripParams {
  direction?: string;
  wrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
}

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
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.alignContent && `align-content: ${props.alignContent};`}
`;

export const UiTulkitFlexGrid = (props: UiTulkitFlexGridProps) => {
  const { params } = props;

  return (
    <Div
      gridWidth={props?.width}
      gridHeight={props?.height}
      flexDirection={params?.direction}
      flexWrap={params?.wrap}
      justifyContent={params?.justifyContent}
      alignItems={params?.alignItems}
      alignContent={params?.alignContent}
    >
      {props.children}
    </Div>
  );
};
