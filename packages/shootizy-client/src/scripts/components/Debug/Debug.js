/**
 * Debug component, use only to help to design the project. Disable it by commenting
 * its import in index.js
 */

import React from "react";

class Debug extends React.Component {
  constructor(props) {
    super(props);
    console.log("DEBUG ACTIVATED");
  }

  componentDidMount() {
    // debug
    setTimeout(() => {
      window.scrollTo(0, 750);
    }, 500);
  }

  render() {
    return <></>;
  }
}

export default Debug;
