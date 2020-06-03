import React from 'react';

interface CardProps {
  text: string;
}

export const Card = (props: CardProps) => {
  const { text } = props;

  return <div>{text}</div>;
};
