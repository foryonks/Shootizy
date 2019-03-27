/**
 * Debug component, use only to help to design the project. Disable it by commenting
 * its import in index.js
 */

import React from "react";

const reactDebug = process.env.REACT_APP_DEBUG === "true";

if (reactDebug) {
  // using conditionnal CSS creation is mandatory because require is always actived :(
  // so don't know why
  const style = document.createElement("style");
  style.innerHTML = `
  body {
    width: 1920px;
  }
  `;
  document.head.appendChild(style);
}

class Debug extends React.Component {
  constructor(props) {
    super(props);
    if (reactDebug) {
      console.log("Debug Activated !");
    }
  }

  componentDidMount() {
    if (reactDebug) {
      setTimeout(() => {
        window.scrollTo(0, 750);
      }, 500);
    }
  }

  render() {
    return reactDebug ? <></> : null;
  }
}

export default Debug;
