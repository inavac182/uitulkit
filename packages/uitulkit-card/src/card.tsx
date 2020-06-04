import * as React from 'react';
import { Text } from '@uitulkit/typography';

interface CardProps {
  text: string;
}

export const Card = (props: CardProps) => {
  const { text } = props;

  return (
    <div>
      <Text>{text}</Text>
    </div>
  );
};
