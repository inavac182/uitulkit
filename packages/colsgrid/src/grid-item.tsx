import * as React from 'react';
import styled from 'styled-components';
import { BreakpointsObject, styledMediaQueriesForBreakpointList } from '@uitulkit/foundation';
import { getSpanSize } from './get-span-size';

interface UiTulkitGridItemProps {
  children?: React.ReactNode;
  params?: UiTulkitGridItemParams;
  colSpan?: number | BreakpointsObject;
  rowSpan?: number | BreakpointsObject;
}

interface UiTulkitGridItemParams {
  collapse?: string;
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
}

interface DivProps {
  itemColSpan: number | BreakpointsObject;
  itemRowSpan: number | BreakpointsObject;
  alignSelf?: string;
  collapse?: string;
}

const Div = styled.div<DivProps>`
  ${(props) => getSpanSize(props.itemColSpan, 'grid-column-start')};
  ${(props) => getSpanSize(props.itemRowSpan, 'grid-row-start')};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) => props.collapse && styledMediaQueriesForBreakpointList(props.collapse, 'display: none;')}
`;

export const UiTulkitGridItem = (props: UiTulkitGridItemProps) => {
  return (
    <Div
      itemColSpan={props.colSpan ? props.colSpan : 1}
      itemRowSpan={props.rowSpan ? props.rowSpan : 1}
      {...props.params}
    >
      {props.children}
    </Div>
  );
};
