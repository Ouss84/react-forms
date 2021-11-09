import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
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
  displayPop = () => {
    this.setState({
      display: true,
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
      <div className="inputpage-display">
        <Form choose={this.insertionHandler} />
        <View {...props} />
        <Popup display={this.displayPop} {...props} />
      </div>
    );
  }
}

export default App;
