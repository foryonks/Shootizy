/**
 * Debug component, use only to help to design the project. Disable it by commenting
 * its import in index.js
 */

import React from "react";

const reactDebug = process.env.REACT_APP_DEBUG === "true";

const useStyle = () => {
  const style = document.createElement("style");
  style.innerHTML = `
  html {
    width: 1920px;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:300px;
  }
  `;
  document.body.appendChild(style);
};

async function useCustomParcoursResaervation() {
  if (/booking/.test(document.location.href)) {
    await wait(500);
    document.querySelector(".ThemeCard").click();
    await wait(200);
    [...document.querySelectorAll(".react-calendar__month-view__days__day")][25].click();
    //await wait(100);
    //window.scrollTo(0, 1200);
  }
}

const waitRatio = 2;
const wait = async sleep => new Promise(resolve => setTimeout(resolve, sleep * waitRatio));

if (reactDebug) {
  // using conditionnal CSS creation is mandatory because require is always actived :(
  // so don't know why

  0 && useStyle();
  useCustomParcoursResaervation();
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
        window.scrollTo(0, 400);
      }, 500);
    }
  }

  render() {
    return reactDebug ? <></> : null;
  }
}

export default Debug;
