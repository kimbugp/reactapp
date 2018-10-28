import React, { Component } from "react";
import Footer from "./components/footer";
import { Routes } from "../src/components/routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
