import * as React from 'react';

interface UiTulkitCardProps {
  text: string;
}

export const UiTulkitCard = (props: UiTulkitCardProps) => {
  const { text } = props;
  return <div>{text}</div>;
};
