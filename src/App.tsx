import React from 'react';
import { Homepage } from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import { Shop } from './pages/shop/Shop';
import { createGlobalStyle } from 'styled-components';

import './normalize.css';
import './App.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: 'Open Sans';
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </>
  );
};
