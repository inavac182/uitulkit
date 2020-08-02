import * as React from 'react';
import styled from 'styled-components';
import { BreakpointsObject, styledMediaQueriesForBreakpointList } from '@uitulkit/foundation';
import { getSpanSize } from './get-span-size';

interface UiTulkitGridItemProps {
  children?: React.ReactNode;
  colSpan?: number | BreakpointsObject;
  rowSpan?: number | BreakpointsObject;
  collapse?: string;
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
}

interface DivProps {
  colSpan?: number | BreakpointsObject;
  rowSpan?: number | BreakpointsObject;
  collapse?: string;
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
}

const Div = styled.div<DivProps>`
  ${(props) => getSpanSize(props.colSpan ? props.colSpan : 1, 'grid-column-start')};
  ${(props) => getSpanSize(props.rowSpan ? props.rowSpan : 1, 'grid-row-start')};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) => props.collapse && styledMediaQueriesForBreakpointList(props.collapse, 'display: none;')}
`;

export const UiTulkitGridItem = (props: UiTulkitGridItemProps) => {
  return <Div {...props}>{props.children}</Div>;
};
