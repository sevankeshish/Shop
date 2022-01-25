import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvcYc6q7TlFeUgIHkHhCod-qnr_3kfp54",
  authDomain: "fristproject-shop.firebaseapp.com",
  projectId: "fristproject-shop",
  storageBucket: "fristproject-shop.appspot.com",
  messagingSenderId: "205433843283",
  appId: "1:205433843283:web:35a50bd9c632513996e0a6",
  measurementId: "G-8XH8WXK88D",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCusstomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
