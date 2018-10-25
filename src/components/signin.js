import React, { Component } from "react";
import { AddEntry } from "./routes";
class SigninForm extends Component {
  state = { data: ["peter", "simon"] };
  addName = name => {
    this.setState(prevState => ({ data: prevState.data.concat(name) }));
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <AddEntry onSubmit={this.addName} />
      </div>
    );
  }
}

class Signin extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>My Diary</div>
        <SigninForm />
      </div>
    );
  }
}

export default Signin;
