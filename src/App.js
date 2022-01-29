import "./App.css";
import React from "react";
import { HomePage } from "./Components/Pages/homePage/homePage.component";
import ShopPage from "./Components/Pages/Shop/shop-component";
import { Header } from "./Components/header/header-component";
import { signInAndSignUpPage } from "./Components/Pages/sign-in-and-sign-up/sign-in-and-sign-up-component";
import { Route, Switch, Link } from "react-router-dom";
import {
  authenticatioin,
  createUserProfileDocument,
} from "./firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
// import { db } from "./test";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//////////for testing
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  //////////////////////////////////-----FIRESTORE------///////////////////////////////////////////
  // componentDidMount() {
  //   this.unsubscribeFromAuth = authenticatioin.onAuthStateChanged(async user => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth);

//       userRef.onSnapshot(snapShot => {
//         this.setState({
//           currentUser: {
//             id: snapShot.id,
//             ...snapShot.data()
//           }
//         });
//       });
//     }
// else{
//     this.setState({ currentUser: userAuth });
  //     // this.setState({ currentUser: user });
  //     // console.log(user);
      // createUserProfileDocument(user);
  //   });
  // }
  //////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    this.unsubscribeFromAuth = authenticatioin.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          {/* <Route path="/shop/hats" component={HatsPage}></Route> */}
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={signInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
