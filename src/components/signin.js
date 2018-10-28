import React, { Component } from "react";
import SigninForm from "./signinform";
import "../css/navbar.css";
import signin from "../actions/LoginAction";
import Loader from "./loader";
class Signin extends Component {
  state = { display: "" };
  getInput = props => {
    this.setState(prevState => ({ data: (prevState.display = "block") }));
    signin(props, this.state.display);

  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar">
            <div className="sign-heading">My Diary</div>
          </ul>
        </nav>
        <Loader style={this.state.display} />
        <SigninForm onSubmit={this.getInput} />
      </div>
    );
  }
}

export default Signin;
