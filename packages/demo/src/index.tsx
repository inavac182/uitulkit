import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import './styles/index.css';
import { Home } from './components';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const AppWrapper = () => {
  const [theme, setTheme] = React.useState('dark');

  const changeTheme = React.useCallback((e) => {
    if (e && e.target && e.target.value) {
      setTheme(e.target.value);
    }
  }, []);

  return (
    <ThemeProvider theme={{ main: theme }}>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Home changeTheme={changeTheme} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
