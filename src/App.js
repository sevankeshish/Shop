import "./App.css";
import React from "react";
import { HomePage } from "./Components/Pages/homePage/homePage.component";
import { Route, Switch, Link } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop/hats*" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
