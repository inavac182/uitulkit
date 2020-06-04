import * as React from 'react';
import styled from 'styled-components';

import { SmallText, H1 } from '@uitulkit/typography';

interface CardProps {
  text: string;
  title: string;
}

export const Card = (props: CardProps) => {
  const { text, title } = props;

  return (
    <Div>
      <H1>{title}</H1>
      <SmallText>{text}</SmallText>
    </Div>
  );
};

export const Div = styled.div`
  border-radius: 4px;
  border: 1px solid dodgerblue;
  padding: 10px;
`;
