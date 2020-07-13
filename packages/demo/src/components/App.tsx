import * as React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { ThemeProvider } from 'styled-components';

import { UiTulkitCard } from '@uitulkit/card';
import { UiTulkitFlexGrid, UiTulkitFlexItem } from '@uitulkit/flexgrid';
import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';

export const App = () => {
  const [theme, setTheme] = React.useState('dark');

  const changeTheme = React.useCallback((e) => {
    if (e && e.target && e.target.value) {
      setTheme(e.target.value);
    }
  }, []);

  return (
    <ThemeProvider theme={{ main: theme }}>
      <div className="App">
        <header className="App-header">
          <button value="light" onClick={changeTheme}>
            Light Theme
          </button>
          <button value="dark" onClick={changeTheme}>
            Dark Theme
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <UiTulkitCard text="Hey!" />
        </header>
        <h2>Flex grid</h2>
        <UiTulkitFlexGrid height="200px">
          <UiTulkitFlexItem size={2}>Hey 1!</UiTulkitFlexItem>
          <UiTulkitFlexItem size={{ s: 2, m: 3, l: 4 }}>Hey 2!</UiTulkitFlexItem>
          <UiTulkitFlexItem params={{ collapse: 's' }}>Hey 3!</UiTulkitFlexItem>
        </UiTulkitFlexGrid>
        <h2>Col Grid</h2>
        <UiTulkitColsGrid cols={5} params={{ colsGap: 10 }}>
          <UiTulkitGridItem colSpan={{ s: 1, m: 2, l: 3 }} rowSpan={2} params={{ alignSelf: 'center' }}>
            Hey 1!
          </UiTulkitGridItem>
          <UiTulkitGridItem>Hey 2!</UiTulkitGridItem>
          <UiTulkitGridItem params={{ collapse: 's|l' }}>Hey 3!</UiTulkitGridItem>
          <UiTulkitGridItem>Hey 4!</UiTulkitGridItem>
          <UiTulkitGridItem>Hey 5!</UiTulkitGridItem>
          <UiTulkitGridItem>Hey 6!</UiTulkitGridItem>
        </UiTulkitColsGrid>
      </div>
    </ThemeProvider>
  );
};
