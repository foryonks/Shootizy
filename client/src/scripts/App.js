import React, { Component } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main" />
      </div>
    );
  }
}

export default App;
