import React, { useEffect } from "react";
import { Homepage } from "./pages/Homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { globalTheme } from "./globalTheme";
import "./App.css";

const _App: React.FC<any> = ({ setCurrentUser, currentUser }) => {
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
        <ThemeProvider theme={globalTheme}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
        </ThemeProvider>
      </Switch>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
