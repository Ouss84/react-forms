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
    inputData: {
      firstname: "",
      lastnamne: "",
      phonenumber: "",
      role: "",
      message: "",
    },
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
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };
  popupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: true,
    });
  };
  postHandler = () => {
    axios
      .post("http://localhost:3004/notes", this.state.inputData)
      .then((res) => {
        console.log(res);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <Header />
        <div className="form-wrapper">
          <div className="inputpage-display">
            <Form choose={this.insertionHandler} submit={this.popupHandler} />
            <View {...this.state.inputData} />
          </div>
          {this.state.showPopup && (
            <Popup {...this.state.inputData} post={this.postHandler} />
          )}
          <div className="note-wrapper">
            {this.state.data.map((note) => (
              <Notes key={note.id} {...note} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
