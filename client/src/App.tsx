import React, { useEffect } from "react";
import { Homepage } from "./pages/Homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Checkout } from "./pages/Checkout";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { connect, RootStateOrAny } from "react-redux";
import { Dispatch } from "redux";
import { globalTheme } from "./globalTheme";
import { ThankYou } from "./pages/ThankYou";
import { checkUserSession } from "./redux/user/userActions";
import "./App.css";

interface Props {
  currentUser: RootStateOrAny;
  checkUserSession: () => void;
}

const _App: React.FC<Props> = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Where people come to find custom keyboards and parts"
        />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
        <title>Keeb Kraze</title>
      </Helmet>
      <Header />
      <Switch>
        <ThemeProvider theme={globalTheme}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/thank-you" component={ThankYou} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
        </ThemeProvider>
      </Switch>
    </>
  );
};

const mapStateToProps = (state: RootStateOrAny) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
