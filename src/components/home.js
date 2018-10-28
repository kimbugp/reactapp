import React, { Component } from "react";
import Navbar from "./navbar";

export class Home extends Component {
  state = { data: ["peter", "simon"] };
  addName = name => {
    this.setState(prevState => ({ data: prevState.data.concat(name) }));
  };
  render() {
    return (
      <div>
        <Navbar/>
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
    this.nameInput.value = "";
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
