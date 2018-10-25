import React, { Component } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signin from "./components/signin";

class App  extends Component {
  state = { data: ["peter", "simon"] };
  addName=(name)=>{
    this.setState(prevState=>({data:prevState.data.concat(name)}))
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
        <AddEntry onSubmit={this.addName}/>
        <Names data={this.state.data} />
      </div>
    );
  }
}

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <Signin />
        <Footer />
      </div>
    );
  }
}

const Names = props => {
  console.log(props.data);
  return (
    <div>
      <ul>
        {props.data.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

class AddEntry extends Component {
  // state={name:''}
  handleSubmit=(event)=>{
    event.preventDefault();
    // this.setState({name:this.nameInput.value})
    this.props.onSubmit(this.nameInput.value)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(input)=>this.nameInput=input}/>
          <button type="submit">Add data</button>
        </form>
      </div>
    );
  }
}

export { App, Login };
