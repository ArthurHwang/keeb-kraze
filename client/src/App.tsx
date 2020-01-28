import React, { useEffect, ReactElement, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { connect, RootStateOrAny } from "react-redux";
import { Dispatch } from "redux";
import { globalTheme } from "./globalTheme";
import { checkUserSession } from "./redux/user/userActions";
import { Spinner } from "./components/Spinner";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const Homepage = lazy(() =>
  import("./pages/Homepage").then(module => ({ default: module.Homepage }))
);

const Shop = lazy(() =>
  import("./pages/Shop").then(module => ({ default: module.Shop }))
);

const Checkout = lazy(() =>
  import("./pages/Checkout").then(module => ({ default: module.Checkout }))
);

const ThankYou = lazy(() =>
  import("./pages/ThankYou").then(module => ({ default: module.ThankYou }))
);

const Login = lazy(() =>
  import("./pages/Login").then(module => ({ default: module.Login }))
);

interface Props {
  currentUser: RootStateOrAny;
  checkUserSession: () => void;
}

const _App: React.FC<Props> = ({
  currentUser,
  checkUserSession
}): ReactElement => {
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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/thank-you" component={ThankYou} />
              <Route
                exact
                path="/login"
                render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
              />{" "}
            </Suspense>
          </ErrorBoundary>
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
