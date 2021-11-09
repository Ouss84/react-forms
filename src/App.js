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
    showPopup: false,
  };
  insertionHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  popupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: true,
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
        <Form choose={this.insertionHandler} submit={this.popupHandler} />
        <View {...props} />
        {this.state.showPopup && <Popup {...props} />}
      </div>
    );
  }
}

export default App;
