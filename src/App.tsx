import React, { useEffect } from "react";
import { Homepage } from "./pages/Homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Checkout } from "./pages/Checkout";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Helmet } from "react-helmet";
import { connect, RootStateOrAny } from "react-redux";
import { Dispatch } from "redux";
import { setCurrentUser } from "./redux/user/userActions";
import { globalTheme } from "./globalTheme";
import "./App.css";

interface Props {
  setCurrentUser: (user: object | null) => any;
  currentUser: RootStateOrAny;
}

const mapStateToProps = (state: RootStateOrAny) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

const _App: React.FC<Props> = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
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
      },
      err => console.log(err)
    );
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
          <Route exact path="/checkout" component={Checkout} />
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

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
