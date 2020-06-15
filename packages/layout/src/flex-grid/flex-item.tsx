import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries, BreakpointsObject } from '@uitulkit/foundation';
import { isNumber } from 'util';

interface UiTulkitFlexItemProps {
  children?: React.ReactNode;
  params?: UiTulkitFlexItemParams;
  size?: number | BreakpointsObject;
}

interface UiTulkitFlexItemParams {
  collapse?: string;
}

interface DivProps {
  size: number | BreakpointsObject;
  collapse: string;
}

const getFlexSize = (size: number | BreakpointsObject) => {
  if (!size) {
    return '';
  }

  if (isNumber(size)) {
    return `flex-grow: ${size}`;
  }

  let style = '';

  Object.keys(size).map((key) => {
    if (mediaQueries[key]) {
      style += mediaQueries[key](`
        flex-grow: ${size[key]}
      `);
    }
  });

  return style;
};

const Div = styled.div<DivProps>`
  ${(props) => getFlexSize(props.size)}
  ${(props) =>
    props.collapse &&
    mediaQueries[props.collapse] &&
    mediaQueries[props.collapse](`
    display: none;
  `)}
`;

export const UiTulkitFlexItem = (props: UiTulkitFlexItemProps) => {
  const { params, size } = props;

  return (
    <Div size={size ? size : {}} collapse={params && params.collapse ? params.collapse : ''}>
      {props.children}
    </Div>
  );
};
