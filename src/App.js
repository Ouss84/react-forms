import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import "./App.css";
class App extends Component {
  state = {
    firstname: "",
    lastnamne: "",
    phonenumber: "",
    role: "",
    message: "",
  };
  insertionHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div>
        <Form choose={this.insertionHandler} />
        <View {...props} />
      </div>
    );
  }
}

export default App;
