import React, { Component } from "react";
import "./App.css";
import "./components/Header";
import Home from "./components/Home";

class App extends Component {
  render() {
    // debug
    setTimeout(() => {
      window.scrollTo(0, 500);
    }, 500);

    return (
      <div className="App">
        <Home />

        <div className="main" />
      </div>
    );
  }
}

export default App;
