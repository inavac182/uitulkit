import * as React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { ThemeProvider } from 'styled-components';

import { UiTulkitCard } from '@uitulkit/card';

export const App = () => {
  return (
    <ThemeProvider theme={{ main: 'dark' }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UiTulkitCard text="Hey!" />
        </header>
      </div>
    </ThemeProvider>
  );
};
