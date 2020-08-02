import * as React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { ThemeProvider } from 'styled-components';

import { UiTulkitCard } from '@uitulkit/card';
import { UiTulkitButton } from '@uitulkit/button';
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
          <UiTulkitButton value="light" onClick={changeTheme} width="200px" className="something">
            Light Theme
          </UiTulkitButton>
          <UiTulkitButton value="dark" onClick={changeTheme} width="200px">
            Dark Theme
          </UiTulkitButton>
          <img src={logo} className="App-logo" alt="logo" />
          <UiTulkitCard text="Hey!" />
        </header>
        <h2>Flex grid</h2>
        <UiTulkitFlexGrid gridHeight="200px">
          <UiTulkitFlexItem size={2}>Hey 1!</UiTulkitFlexItem>
          <UiTulkitFlexItem size={{ s: 2, m: 3, l: 4 }}>Hey 2!</UiTulkitFlexItem>
          <UiTulkitFlexItem collapse="s">Hey 3!</UiTulkitFlexItem>
        </UiTulkitFlexGrid>
        <h2>Col Grid</h2>
        <UiTulkitColsGrid
          gridCols={{ s: 5, m: 8, l: 10 }}
          gridRows={{ s: 2, m: 2, l: 3 }}
          colsGap={10}
          rowsGap={10}
          rowSize="30px"
        >
          <UiTulkitGridItem colSpan={{ s: 1, m: 2, l: 3 }} rowSpan={2}>
            Hey 1!
          </UiTulkitGridItem>
          <UiTulkitGridItem>Hey 2!</UiTulkitGridItem>
          <UiTulkitGridItem collapse="s|l">Hey 3!</UiTulkitGridItem>
          <UiTulkitGridItem rowSpan={{ s: 1, m: 2, l: 3 }}>Hey 4!</UiTulkitGridItem>
          <UiTulkitGridItem>Hey 5!</UiTulkitGridItem>
          <UiTulkitGridItem>Hey 6!</UiTulkitGridItem>
        </UiTulkitColsGrid>
      </div>
    </ThemeProvider>
  );
};
