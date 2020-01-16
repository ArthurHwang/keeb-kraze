import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCf-43t6dHyjUOy9RhlKZ45tY2uyau6gZA",
  authDomain: "mechkb-ecommerce.firebaseapp.com",
  databaseURL: "https://mechkb-ecommerce.firebaseio.com",
  projectId: "mechkb-ecommerce",
  storageBucket: "mechkb-ecommerce.appspot.com",
  messagingSenderId: "1079119544519",
  appId: "1:1079119544519:web:75fa6840e1f3d31129bee2",
  measurementId: "G-YMZ3KNH1MR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
