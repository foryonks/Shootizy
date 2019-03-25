import React, { Component } from "react";
import "./App.css";
import "./components/Header";
import Home from "./components/Home";
import Debug from "./components/Debug";

class App extends Component {
  render() {
    return (
      <div className="App">
        {process.env.REACT_APP_DEBUG && <Debug />}
        <Home />
        <div className="main" />
      </div>
    );
  }
}

export default App;
