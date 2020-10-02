import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UiTulkitCardProps } from '.';
import { CardWrapper } from './wrappers';

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
          <CardWrapper {...props} />
        </StyledLink>
      )}
      {externalLink && (
        <ALink href={externalLink}>
          <CardWrapper {...props} />
        </ALink>
      )}
      {!link && !externalLink && <CardWrapper {...props} />}
    </>
  );
};

UiTulkitCard.displayName = 'UiTulkitCard';
