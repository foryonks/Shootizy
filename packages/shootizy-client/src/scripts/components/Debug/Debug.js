/**
 * Debug component, use only to help to design the project. Disable it by commenting
 * its import in index.js
 */

import React from "react";

const debug = process.env.REACT_APP_DEBUG;

class Debug extends React.Component {
  constructor(props) {
    super(props);
    if (debug) {
      console.log("Debug Activated !");
    }
  }

  componentDidMount() {
    if (debug) {
      setTimeout(() => {
        window.scrollTo(0, 750);
      }, 500);
    }
  }

  render() {
    return debug ? <></> : null;
  }
}

export default Debug;
