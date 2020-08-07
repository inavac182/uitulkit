import * as React from 'react';
import { MouseEvent } from 'react';
import '../styles/App.css';

import { UiTulkitView } from '@uitulkit/view';
import { UiTulkitButton } from '@uitulkit/button';
import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';
import { Viewport, Breakpoints, Themes } from '@uitulkit/foundation';

interface HomeProps {
  changeTheme: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export const Home = ({ changeTheme }: HomeProps) => {
  return (
    <UiTulkitView className="App" centered>
      <UiTulkitColsGrid gridCols={{ s: 1, m: 1, l: 10 }} className="grid-big">
        <UiTulkitGridItem colSpan={3}>
          <p>NavBar</p>
        </UiTulkitGridItem>
        <UiTulkitGridItem colSpan={2}>
          <p>Home text</p>
          <UiTulkitButton value={Themes.LIGHT} onClick={changeTheme}>
            Light
          </UiTulkitButton>
          <UiTulkitButton value={Themes.DARK} onClick={changeTheme}>
            Dark
          </UiTulkitButton>
        </UiTulkitGridItem>
        <Viewport breakpoint={Breakpoints.MEDIUM}>
          <UiTulkitGridItem colSpan={1}>Just in medium</UiTulkitGridItem>
        </Viewport>
      </UiTulkitColsGrid>
      <Viewport breakpoints="s|m">
        <p>Hey!</p>
      </Viewport>
    </UiTulkitView>
  );
};
