import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitListProps {
  children?: React.ReactNode;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const List = styled.ul<UiTulkitListProps>`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  ${(props) => props?.textAlign && `text-align: ${props.textAlign}`};
`;

export const UiTulkitList = (props: UiTulkitListProps) => {
  return <List {...props}>{props.children}</List>;
};
