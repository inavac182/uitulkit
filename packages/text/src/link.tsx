import * as React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface UiTulkitTextProps {
  children?: React.ReactNode;
  className?: string;
  to: string;
  external?: boolean;
}

const StyledLink = styled(Link)`
  font-size: 1.2em;
  text-decoration: none;
`;

const StyledExternalLink = styled.a`
  font-size: 1.2em;
  text-decoration: none;
`;

export const UiTulkitLink = (props: UiTulkitTextProps) => {
  if (props.external) {
    return (
      <StyledExternalLink className={props.className} href={props.to}>
        {props.children}
      </StyledExternalLink>
    );
  } else {
    return <StyledLink to={props.to}>{props.children}</StyledLink>;
  }
};
