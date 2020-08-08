import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import { UiTulkitView } from '@uitulkit/view';
import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';

import { Header, Navbar, Footer, Welcome, Buttons, Cards, Grids } from './components';
import './styles/index.css';
import './styles/App.css';
import { Viewport, Breakpoints } from '@uitulkit/foundation';

const history = createBrowserHistory();

const AppWrapper = () => {
  const [theme, setTheme] = React.useState('dark');

  const changeTheme = React.useCallback((e) => {
    if (e && e.target && e.target.value) {
      setTheme(e.target.value);
    }
  }, []);

  return (
    <Router history={history}>
      <ThemeProvider theme={{ main: theme }}>
        <UiTulkitView className="App" centered>
          <Header />
          <UiTulkitColsGrid gridCols={{ s: 1, m: 1, l: 10 }} className="grid-big">
            <Viewport breakpoint={Breakpoints.LARGE}>
              <UiTulkitGridItem colSpan={3}>
                <Navbar />
              </UiTulkitGridItem>
            </Viewport>
            <UiTulkitGridItem colSpan={7}>
              <Switch>
                <Route path="/buttons/" component={Buttons} />
                <Route path="/cards/" component={Cards} />
                <Route path="/grids/" component={Grids} />
                <Route path="/">
                  <Welcome changeTheme={changeTheme} />
                </Route>
              </Switch>
            </UiTulkitGridItem>
          </UiTulkitColsGrid>
          <Footer />
        </UiTulkitView>
      </ThemeProvider>
    </Router>
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
