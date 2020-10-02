import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries, BreakpointsObject, styledMediaQueriesForBreakpointList } from '@uitulkit/foundation';
import { isNumber } from 'util';

interface UiTulkitFlexItemProps {
  children?: React.ReactNode;
  size?: number | BreakpointsObject;
  collapse?: string;
  order?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: string;
}

interface DivProps {
  size?: number | BreakpointsObject;
  collapse?: string;
  order?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: string;
}

const getFlexSize = (size: number | BreakpointsObject) => {
  if (!size) {
    return '';
  }

  if (isNumber(size)) {
    return `flex-grow: ${size};`;
  }

  let style = 'flex-grow: 1;';

  Object.keys(size).map((key) => {
    if (mediaQueries[key]) {
      style += mediaQueries[key](`flex-grow: ${size[key]};`);
    }
  });

  return style;
};

const Div = styled.div<DivProps>`
  ${(props) => getFlexSize(props.size ? props.size : {})}
  ${(props) => props.collapse && styledMediaQueriesForBreakpointList(props.collapse, 'display: none;')}
  ${(props) => props.order && `order: ${props.order};`}
  ${(props) => props.shrink && `flex-shrink: ${props.shrink};`}
  ${(props) => props.basis && `flex-basis: ${props.basis};`}
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
`;

export const UiTulkitFlexItem = (props: UiTulkitFlexItemProps) => <Div {...props}>{props.children}</Div>;

UiTulkitFlexItem.displayName = 'UiTulkitFlexItem';
