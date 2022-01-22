import React from "react";
import "./sign-in-styles.scss";

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = (event) => event.preventDefault();
  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with Email and Password</span>
        <form onSubmit={this.handelSubmit}>
          <input
            onChange={this.handelChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          ></input>
          <label>Email</label>
          <input
            onChange={this.handelChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          ></input>
          <label>Password</label>

          <input type="submit" value="Submit-form"></input>
        </form>
      </div>
    );
  }
}
