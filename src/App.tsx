import React from "react";
import { Homepage } from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import "./App.css";

const theme = {
  // root colors
  purple: "#524763",
  teal: "#82d8d8",
  green: "#cbe56c",
  black: "#333",
  grey: "#d8d8d8",
  // mixins below
  shrinkLabel: () => `
      top: -14px;
      font-size: 12px;
      color: black ;
  `
};

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
        </ThemeProvider>
      </Switch>
    </>
  );
};
