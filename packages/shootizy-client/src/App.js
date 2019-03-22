import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

const TestComponent = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count => count + 1)}>count = {count}</button>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <TestComponent />
      </div>
    );
  }
}

export default App;
