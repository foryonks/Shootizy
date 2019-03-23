import React, { Component } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <div className="main" />
      </div>
    );
  }
}

export default App;
