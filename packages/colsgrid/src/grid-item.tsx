import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries, BreakpointsObject, styledMediaQueriesForBreakpointList } from '@uitulkit/foundation';
import { isNumber } from 'util';

interface UiTulkitGridItemProps {
  children?: React.ReactNode;
  params?: UiTulkitGridItemParams;
  colSpan?: number | BreakpointsObject;
  rowSpan?: number | BreakpointsObject;
}

interface UiTulkitGridItemParams {
  collapse?: string;
}

interface DivProps {
  itemColSpan: number | BreakpointsObject;
  itemRowSpan: number | BreakpointsObject;
  collapse?: string;
}

const getSpanSize = (size: number | BreakpointsObject, styleKey: string) => {
  if (!size) {
    return `${styleKey}: span 1;`;
  }

  if (isNumber(size)) {
    return `${styleKey}: span ${size};`;
  }

  let style = 'display: none;';

  Object.keys(size).map((key) => {
    if (mediaQueries[key]) {
      style += mediaQueries[key](`display: block; ${styleKey}: span ${size[key]};`);
    }
  });

  return style;
};

const Div = styled.div<DivProps>`
  ${(props) => getSpanSize(props.itemColSpan, 'grid-column-start')};
  ${(props) => getSpanSize(props.itemRowSpan, 'grid-row-start')};
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
