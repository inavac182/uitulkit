import * as React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import { UiTulkitCard } from '@uitulkit/card';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UiTulkitCard text="Hey!" />
      </header>
    </div>
  );
};
