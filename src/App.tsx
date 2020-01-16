import React, { useEffect } from "react";
import { Homepage } from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import "./App.css";

const theme = {
  // root colors
  purple: "#524763",
  teal: "#82d8d8",
  green: "#cbe56c",
  black: "#333",
  grey: "#d8d8d8",
  white: "#fff",
  // mixins
  shrinkLabel: () => `
      top: -14px;
      font-size: 12px;
      color: black ;
  `
};

const _App: React.FC<any> = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          });
        }
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  });

  useEffect(() => {
    console.log(setCurrentUser);
  }, [setCurrentUser]);

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
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
        </ThemeProvider>
      </Switch>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export const App = connect(null, mapDispatchToProps)(_App);
