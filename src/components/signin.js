import React, { Component } from "react";
// import "./footer.css";
class SigninForm extends Component {
  state = {};
  render() {
    return <div>hello</div>;
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
