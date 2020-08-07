import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitViewProps {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  id?: string;
  centered?: boolean;
}

const FullScreenDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const CenteredDiv = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const UiTulkitView = (props: UiTulkitViewProps) => {
  if (props.centered) {
    return (
      <FullScreenDiv>
        <CenteredDiv {...props}>{props.children}</CenteredDiv>
      </FullScreenDiv>
    );
  }

  return <FullScreenDiv {...props}>{props.children}</FullScreenDiv>;
};
