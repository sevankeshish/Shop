import React from "react";
import "./header-styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { authenticatioin } from "../../firebase/firebase-config";

export const Header = ({currentUser}) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="header-options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => authenticatioin.signOut()}>
          SIGN OUT </div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
      }
    </div>
  </div>
);
