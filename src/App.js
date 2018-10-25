import React, { Component } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SignIn from "./components/signin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export { App, Login };
