import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import firebase from "./firebase-config";
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

//////////////////////////////////-----FIRESTORE V9------///////////////////////////////////////////

// const db = getFirestore(firebaseApp);

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

//////////////////////////////////-----FIRESTORE------///////////////////////////////////////////

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = getFirestore.doc(`user/${userAuth.uid}`);
//   const snapShot = await userRef.get();

//   // console.log(getFirestore.doc("user/123dashadx"));
//   // console.log(snapShot);

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createAt = new DataTransfer();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.lod(error.message);
//     }
//   }
//   return userRef;
// };

//////////////////////////////////////////////////////////////////////////
// export default firebaseConfig;

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
