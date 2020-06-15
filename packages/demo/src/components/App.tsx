import * as React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { ThemeProvider } from 'styled-components';

import { UiTulkitCard } from '@uitulkit/card';
import { UiTulkitFlexGrid, UiTulkitFlexItem } from '@uitulkit/layoutgrid';

export const App = () => {
  const [theme, setTheme] = React.useState('dark');

  const changeTheme = React.useCallback(
    (e) => {
      if (e && e.target && e.target.value) {
        setTheme(e.target.value);
      }
    },
    [theme]
  );

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
        <UiTulkitFlexGrid>
          <UiTulkitFlexItem>Hey 1!</UiTulkitFlexItem>
          <UiTulkitFlexItem size={{ s: 2 }}>Hey 2!</UiTulkitFlexItem>
          <UiTulkitFlexItem params={{ collapse: 'xs' }}>Hey 3!</UiTulkitFlexItem>
        </UiTulkitFlexGrid>
      </div>
    </ThemeProvider>
  );
};
