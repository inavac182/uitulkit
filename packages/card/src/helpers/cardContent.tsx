import * as React from 'react';
import styled from 'styled-components';

import { UiTulkitHeading, UiTulkitText } from '@uitulkit/text';
import { CardDiv, CardImageDiv } from '.';
import { UiTulkitCardProps } from '../types';

const CardContentDiv = styled.div<UiTulkitCardProps>`
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;

export const CardContent = (props: UiTulkitCardProps) => {
  const {
    text,
    identifier,
    extendHeight,
    textAlign,
    image,
    imageHeight,
    className,
    header,
    headerLevel,
    onClick,
  } = props;

  const onClickHandler = () => {
    if (onClick) {
      onClick(identifier || undefined);
    }
  };

  return (
    <CardDiv
      textAlign={textAlign}
      className={className}
      onClick={onClick ? onClickHandler : undefined}
      extendHeight={extendHeight}
    >
      {image && <CardImageDiv image={image} imageHeight={imageHeight} />}
      <CardContentDiv>
        {header && (
          <UiTulkitHeading className="all-margin-top-ten" level={headerLevel || 1}>
            {header}
          </UiTulkitHeading>
        )}
        <UiTulkitText className="all-margin-top-ten all-margin-bottom-ten">{text}</UiTulkitText>
      </CardContentDiv>
    </CardDiv>
  );
};
