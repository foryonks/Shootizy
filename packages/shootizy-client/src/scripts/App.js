import React, { Component } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Prices from "./components/Prices";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Prices className="Prices-header" />
        <div className="main" />
      </div>
    );
  }
}

export default App;
