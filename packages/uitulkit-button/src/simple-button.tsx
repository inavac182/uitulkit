import * as React from 'react';

interface SimpleButtonProps {
  text: string;
}

export const SimpleButton = (props: SimpleButtonProps) => {
  const { text } = props;

  return <button>{text}</button>;
};
