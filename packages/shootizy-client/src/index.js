import "core-js/es/array/find";
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { CredentialsProvider } from "scripts/contexts/Credentials";
import App from "./scripts/App";
import * as serviceWorker from "./serviceWorker";

import "destyle.css";
import "./styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <CredentialsProvider>
      <App />
    </CredentialsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
