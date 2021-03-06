import React from "react";
import "./sign-in-styles.scss";
import { FormInput } from "../form-input/form-input-component";
import { CustomButton } from "../custom-button/custom-button-component";
import { authenticatioin, signInWithGoogle } from "../../firebase/firebase-config";
// import { signInWithEmailAndPassword } from "firebase/auth";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => event.preventDefault();

  /////////////////////////////////////signInWithEmailAndPassword////////////////////////
  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const {email, password} = this.state;

  //   try {
  //     await authenticatioin.signInWithEmailAndPassword(email, password);
  //     this.setState({ email: "", password: "" });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
////////////////////////////////////////////////////////////////////////////////////////
  handleChange = (event) => {
    // console.log(event)
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label="email"
          ></FormInput>
          {/* <label>Email</label> */}

          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label="password"
          ></FormInput>
          {/* <label>Password</label> */}

          <div className="buttons">
            <CustomButton type="submit" value="Submit-form">
              SIGN IN
            </CustomButton>

            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>

          {/* <CustomButton type="submit" value="Submit-form" children={'romel'}/> */}
        </form>
      </div>
    );
  }
}
