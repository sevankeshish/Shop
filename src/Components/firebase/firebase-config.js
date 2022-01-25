import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { authenticatioin } from "./config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvcYc6q7TlFeUgIHkHhCod-qnr_3kfp54",
  authDomain: "fristproject-shop.firebaseapp.com",
  projectId: "fristproject-shop",
  storageBucket: "fristproject-shop.appspot.com",
  messagingSenderId: "205433843283",
  appId: "1:205433843283:web:35a50bd9c632513996e0a6",
  measurementId: "G-8XH8WXK88D",
};

//   export default firebaseConfig;

const app = initializeApp(firebaseConfig);
export const authenticatioin = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authenticatioin, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
