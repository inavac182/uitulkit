import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitCardProps {
  children?: React.ReactNode;
}

const Div = styled.div`
  width: 100%;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
`;

export const UiTulkitGrid = (props: UiTulkitCardProps) => {
  return <Div>{props.children}</Div>;
};
