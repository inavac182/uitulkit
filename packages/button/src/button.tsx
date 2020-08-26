import * as React from 'react';
import { MouseEvent } from 'react';

import { UiTulkitBaseButtonProps, Button } from '.';

interface UiTulkitButtonProps extends UiTulkitBaseButtonProps {
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const UiTulkitButton = (props: UiTulkitButtonProps) => {
  return <Button {...props}>{props?.children}</Button>;
};
