import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries, BreakpointsObject, styledMediaQueriesForBreakpointList } from '@uitulkit/foundation';
import { isNumber } from 'util';

interface UiTulkitGridItemProps {
  children?: React.ReactNode;
  params?: UiTulkitGridItemParams;
  size?: number | BreakpointsObject;
}

interface UiTulkitGridItemParams {
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
`;

export const UiTulkitGridItem = (props: UiTulkitGridItemProps) => {
  const { params, size } = props;

  return (
    <Div itemSize={size ? size : {}} itemCollapse={params?.collapse}>
      {props.children}
    </Div>
  );
};
