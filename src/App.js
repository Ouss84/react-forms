import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import axios from "axios";
class App extends Component {
  state = {
    firstname: "",
    lastnamne: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3004/notes").then((res) => {
      this.setState({ data: res.data });
      // console.log(res);
      // console.log(res.data);
    });
  }
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
      first: this.state.firstname,
      last: this.state.lastname,
      phone: this.state.phonenumber,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div>
        <Header />
        <div className="inputpage-display">
          <Form choose={this.insertionHandler} submit={this.popupHandler} />
          <View {...props} />
        </div>
        {this.state.showPopup && <Popup {...props} />}
        {this.state.data.map((note) => (
          <Notes key={note.id} {...note} />
        ))}
      </div>
    );
  }
}

export default App;
