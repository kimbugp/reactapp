import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
const Profile = () => <h1>Profile</h1>;
const Login = () => <h1>login</h1>;
const About = () => <h1>About</h1>;
const Logout = () => <h1>You have been logged out</h1>;
const Home = () => {
  return <h1>Home</h1>;
};
class Routes extends Component {
  state = {};
  render() {
    return (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/signout" component={Logout} />
          <Route component={Login} />
        </Switch>
    );
  }
}

export default Routes;
