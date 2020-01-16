import React, { useState, useEffect } from "react";
import { Homepage } from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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

interface FirebaseUser {
  currentUser: any;
}

export const App: React.FC = () => {
  const [user, setUser] = useState<FirebaseUser>({ currentUser: null });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // setUser({ currentUser: user });
      console.log("fired");

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot(snapShot => {
            setUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          });
        }
      } else {
        setUser({
          currentUser: userAuth
        });
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Header currentUser={user} />
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
