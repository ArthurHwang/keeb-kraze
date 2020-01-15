import React from "react";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import { Shop } from "./pages/shop/Shop";
import { Header } from "./components/Header";
import { createGlobalStyle } from "styled-components";

import "./normalize.css";
import "./App.css";

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
    padding: 20px 60px;
  }
  a {
   color:#524763; text-decoration: none   
  }  
  a:visited {
    color:#524763;
  }
  a:hover {
    color:#82d8d8;
  }   
  a:active {
    color:#82d8d8;
  }   
`;

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </>
  );
};
