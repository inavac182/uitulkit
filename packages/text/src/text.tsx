import * as React from 'react';
import styled from 'styled-components';

interface UiTulkitTextProps {
  children?: React.ReactNode;
  className?: string;
}

const Paragrah = styled.p`
  font-size: 1.2em;
  text-align: left;
`;

export const UiTulkitText = (props: UiTulkitTextProps) => {
  return <Paragrah {...props}>{props.children}</Paragrah>;
};

UiTulkitText.displayName = 'UiTulkitText';
