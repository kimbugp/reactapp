import React, { Component } from "react";
import "../css/navbar.css";

const Urls = () => {
  return (
    <div>
      <li className="navbar">
        <a href="/home" >
          Home
        </a>
      </li>
      <li className="navbar">
        <a href="/profile" >
          Profile
        </a>
      </li>
      <li className="navbar">
        <a href="/about" >
          About
        </a>
      </li>
      <li className="navbar" id="signout">
        <a href="/signout" >
          Logout
        </a>
      </li>
    </div>
  );
};
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar">
          <Urls />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
