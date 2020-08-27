import * as React from 'react';
import { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { UiTulkitIconsWrapper } from '@uitulkit/icons-wrapper';

import { UiTulkitBaseButtonProps, Button } from '.';

interface UiTulkitButtonProps extends UiTulkitBaseButtonProps {
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
}

export const UiTulkitIconButton = (props: UiTulkitButtonProps) => {
  return (
    <Button {...props}>
      <UiTulkitIconsWrapper>
        <FontAwesomeIcon icon={faCheckSquare} />
      </UiTulkitIconsWrapper>
    </Button>
  );
};
