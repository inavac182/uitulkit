import * as React from 'react';
import styled from 'styled-components';

import { UiTulkitHeading, UiTulkitText } from '@uitulkit/text';

import { UiTulkitCardProps } from '.';
import { CardDiv, CardImageDiv } from './helpers';

const CardContentDiv = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const UiTulkitCard = (props: UiTulkitCardProps) => {
  const { text, textAlign, image, imageHeight, className, header, headerLevel } = props;

  return (
    <CardDiv textAlign={textAlign} className={className}>
      {image && <CardImageDiv image={image} imageHeight={imageHeight} />}
      <CardContentDiv>
        {header && <UiTulkitHeading level={headerLevel || 1}>{header}</UiTulkitHeading>}
        <UiTulkitText>{text}</UiTulkitText>
      </CardContentDiv>
    </CardDiv>
  );
};
