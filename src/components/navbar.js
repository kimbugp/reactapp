import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./navbar.css";
const Home = () => {
  return <h1>Home</h1>;
};
const Profile = () => <h1>Profile</h1>;
const Login = () => <h1>login</h1>;
const About = () => <h1>About</h1>;
const Logout = () => <h1>You have been logged out</h1>;
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
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }
  render() {
    return (
      <div className="foo">
        <Router>
          <nav>
            <ul>
              <Urls />
            </ul>
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/signout" component={Logout} />
          </nav>
        </Router>
      </div>
    );
  }
}

export default Navbar;
