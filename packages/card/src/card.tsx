import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UiTulkitCardProps } from '.';
import { CardContent } from './helpers';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ALink = styled.a`
  text-decoration: none;
`;

export const UiTulkitCard = (props: UiTulkitCardProps) => {
  const { link, externalLink } = props;

  return (
    <>
      {link && (
        <StyledLink to={link}>
          <CardContent {...props} />
        </StyledLink>
      )}
      {externalLink && (
        <ALink href={externalLink}>
          <CardContent {...props} />
        </ALink>
      )}
      {!link && !externalLink && <CardContent {...props} />}
    </>
  );
};
