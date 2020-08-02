import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitFlexGridProps {
  children?: React.ReactNode;
  gridHeight?: string;
  gridWidth?: string;
  direction?: string;
  flexWrap?: string;
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
  display: flex;
  ${(props) => props.gridWidth && `width: ${props.gridWidth};`}
  ${(props) => props.gridHeight && `height: ${props.gridHeight};`}
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.alignContent && `align-content: ${props.alignContent};`}
`;

export const UiTulkitFlexGrid = (props: UiTulkitFlexGridProps) => {
  return <Div {...props}>{props.children}</Div>;
};
