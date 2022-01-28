import firebase from "./firebase-config";
import { getFirestore } from "@firebase/firestore/";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvcYc6q7TlFeUgIHkHhCod-qnr_3kfp54",
  authDomain: "fristproject-shop.firebaseapp.com",
  projectId: "fristproject-shop",
  storageBucket: "fristproject-shop.appspot.com",
  messagingSenderId: "205433843283",
  appId: "1:205433843283:web:35a50bd9c632513996e0a6",
  measurementId: "G-8XH8WXK88D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// const db = getFirestore(firebaseApp);

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

const firestore = firebase.firestore();

firestore
  .collection("user")
  .doc("CIji6NoC40S4hAEE1Wyb ")
  .collection("cardItem")
  .doc("DZAicRzUIVy10OQ7n0Qb");

// firestore.doc("/user/CIji6NoC40S4hAEE1Wyb/cardItem/DZAicRzUIVy10OQ7n0Qb");
// firestore.collection("/user/CIji6NoC40S4hAEE1Wyb/cardItem/");
