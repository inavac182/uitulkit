import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries, BreakpointsObject, styledMediaQueriesForBreakpointList } from '@uitulkit/foundation';
import { isNumber } from 'util';

interface UiTulkitFlexItemProps {
  children?: React.ReactNode;
  params?: UiTulkitFlexItemParams;
  size?: number | BreakpointsObject;
}

interface UiTulkitFlexItemParams {
  collapse?: string;
  order?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: string;
}

interface DivProps {
  itemSize: number | BreakpointsObject;
  itemCollapse?: string;
  itemOrder?: number;
  itemShrink?: number;
  itemBasis?: string;
  itemAlignSelf?: string;
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
  ${(props) => getFlexSize(props.itemSize)}
  ${(props) => props.itemCollapse && styledMediaQueriesForBreakpointList(props.itemCollapse, 'display: none;')}
  ${(props) => props.itemOrder && `order: ${props.itemOrder};`}
  ${(props) => props.itemShrink && `flex-shrink: ${props.itemShrink};`}
  ${(props) => props.itemBasis && `flex-basis: ${props.itemBasis};`}
  ${(props) => props.itemAlignSelf && `align-self: ${props.itemAlignSelf};`}
`;

export const UiTulkitFlexItem = (props: UiTulkitFlexItemProps) => {
  const { params, size } = props;

  return (
    <Div
      itemSize={size ? size : {}}
      itemCollapse={params?.collapse}
      itemOrder={params?.order}
      itemShrink={params?.shrink}
      itemBasis={params?.basis}
      itemAlignSelf={params?.alignSelf}
    >
      {props.children}
    </Div>
  );
};
