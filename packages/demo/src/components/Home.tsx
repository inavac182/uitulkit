import * as React from 'react';
import { MouseEvent } from 'react';
import '../styles/App.css';

import { UiTulkitButton } from '@uitulkit/button';
import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';
import { Viewport, Breakpoints } from '@uitulkit/foundation';

interface HomeProps {
  changeTheme: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export const Home = ({ changeTheme }: HomeProps) => {
  return (
    <div className="App">
      <UiTulkitButton value="dark" onClick={changeTheme}>
        Change to light
      </UiTulkitButton>
      <UiTulkitColsGrid gridCols={{ s: 1, m: 1, l: 10 }} className="grid-big">
        <UiTulkitGridItem colSpan={3}>NavBar</UiTulkitGridItem>
        <UiTulkitGridItem colSpan={2}>Home text</UiTulkitGridItem>
        <Viewport breakpoint={Breakpoints.MEDIUM}>
          <UiTulkitGridItem colSpan={1}>Just in medium</UiTulkitGridItem>
        </Viewport>
      </UiTulkitColsGrid>
      <Viewport breakpoints="s|m">
        <p>Hey!</p>
      </Viewport>
    </div>
  );
};
