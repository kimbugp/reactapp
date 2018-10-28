import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import  Authenticate from "../actions/CheckAuthentication";
import { Home } from "../components/home";
import Signin from "../components/signin";
import Signout from './signout';

const NotFound = () => <h1>Page not Found</h1>;
const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = Authenticate.isLoggedIn();
  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

class Routes extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/profile" component={Home} />
        <Route path="/login" component={Signin} />
        <ProtectedRoute path="/about" component={Home} />
        <ProtectedRoute path="/" component={Home} />
        <ProtectedRoute path="/signout" component={Signout}/>
        <Route path="/forgot" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export { Routes };