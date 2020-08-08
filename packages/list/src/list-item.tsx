import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitListProps {
  children?: React.ReactNode;
  className?: string;
}

const ListItem = styled.li`
  width: 100%;
`;

export const UiTulkitListItem = (props: UiTulkitListProps) => {
  return <ListItem {...props}>{props.children}</ListItem>;
};
