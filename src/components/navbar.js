import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";
import Routes from "./routes";

const Urls = () => {
  return (
    <div>
      <li className="navbar">
        <Link to="/home">Home</Link>
      </li>
      <li className="navbar">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="navbar">
        <Link to="/about">About</Link>
      </li>
      <li className="navbar" id="signout">
        <Link to="/signout">Logout</Link>
      </li>
    </div>
  );
};
class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul className='navbar'>
            <Urls />
          </ul>
          <Routes />
        </nav>
      </Router>
    );
  }
}

export default Navbar;
