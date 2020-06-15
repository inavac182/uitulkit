import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitFlexGridProps {
  children?: React.ReactNode;
  params?: UiTulkitFlexGripParams;
}

interface UiTulkitFlexGripParams {
  direction?: string;
  wrap?: string;
  flow?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
}

const Div = styled.div`
  display: flex;
`;

export const UiTulkitFlexGrid = (props: UiTulkitFlexGridProps) => {
  return <Div>{props.children}</Div>;
};
