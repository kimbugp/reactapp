import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
const Profile = () => <h1>Profile</h1>;
const Login = () => <h1>login</h1>;
const About = () => <h1>About</h1>;
const Logout = () => <h1>You have been logged out</h1>;

class Home extends Component {
  state = { data: ["peter", "simon"] };
  addName = name => {
    this.setState(prevState => ({ data: prevState.data.concat(name) }));
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <AddEntry onSubmit={this.addName} />
        <Names data={this.state.data} />
      </div>
    );
  }
}
const Names = props => {
  return (
    <div>
      <ul>
        {props.data.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
class AddEntry extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.nameInput.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={input => (this.nameInput = input)} />
          <button type="submit">Add data</button>
        </form>
      </div>
    );
  }
}

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

export { Routes, AddEntry };
