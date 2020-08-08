import * as React from 'react';
import { MouseEvent } from 'react';

import { UiTulkitButton } from '@uitulkit/button';
import { Themes } from '@uitulkit/foundation';

interface WelcomeProps {
  changeTheme: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export const Welcome = ({ changeTheme }: WelcomeProps) => {
  return (
    <>
      <p>Welcome to UiTulkit!</p>
      <UiTulkitButton value={Themes.LIGHT} onClick={changeTheme}>
        Light
      </UiTulkitButton>
      <UiTulkitButton value={Themes.DARK} onClick={changeTheme}>
        Dark
      </UiTulkitButton>
    </>
  );
};
