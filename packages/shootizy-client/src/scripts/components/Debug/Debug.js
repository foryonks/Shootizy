/**
 * Debug component, use only to help to design the project. Disable it by commenting
 * its import in index.js
 */

import React from "react";

const reactDebug = process.env.REACT_APP_DEBUG === "true";

const debugStyle = () => {
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

async function debugCustomParcoursReservation() {
  if (/booking/.test(document.location.href)) {
    (await wait(() => document.querySelector(".ThemeCard"))).click();
    (await wait(
      () => [...document.querySelectorAll(".react-calendar__month-view__days__day")][30]
    )).click();

    (await wait(() => document.querySelector(".booking-time-picker__item-button"))).click();
    (await wait(() => document.querySelector(".booking-summary__item.card button"))).click();
    await wait(300);
    window.scrollTo(0, 200);
    (await wait(() => document.querySelector(".ThemeCard"))).click();
  }
}

const waitRatio = 2;
const delayDetection = 50;
const countBeforeError = 100;
const wait = async sleep => {
  let fn =
    typeof sleep === "function"
      ? (resolve, reject, count) => {
          if (!count) count = 0;
          const item = sleep();
          if (item) {
            resolve(item);
          } else {
            if (count < countBeforeError) {
              setTimeout(fn, delayDetection, resolve, reject, count + 1);
            } else {
              reject("Element not found, function is : \n" + sleep.toString());
            }
          }
        }
      : resolve => setTimeout(resolve, sleep * waitRatio);

  return new Promise(fn);
};

if (reactDebug) {
  // using conditionnal CSS creation is mandatory because require is always actived :(
  // so don't know why

  0 && debugStyle();
  0 && debugCustomParcoursReservation();
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
