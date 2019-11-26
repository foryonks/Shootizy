/* eslint-disable */

/**
 * Debug component, use only to help to design the project. Disable it by commenting
 * its import in index.js
 */

import React from "react";

const reactDebug = process.env.REACT_APP_DEBUG === "true";
const init = () => {
  if (reactDebug) {
    debugCustomParcoursReservation();
    0 && debugStyle();
  }
};

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
  // if (/admin\/blog\/categories/.test(document.location.href)) {
  //   const form = await wait(() =>
  //     document.querySelector(".CategoriesAdminWrapper > ul > .FormCategoryWrapper:last-child")
  //   );
  //   const name = await wait(() => form.querySelector("#form-blog-category__name"));
  //   findReact(name).pendingProps.onChange("name", "totoriti");
  //   const slug = await wait(() => form.querySelector("#form-blog-category__slug"));
  //   findReact(slug).pendingProps.onChange("slug", "totoriti");
  //   await wait(200);
  //   (await wait(() => form.querySelector("button"))).click();
  //   wait(300);
  //   (await wait(() => document.querySelectorAll(".delete-button")[4])).click();
  //   (await wait(() => document.querySelector(".Confirm .btn-success"))).click();
  // }
  // if (/booking/.test(document.location.href)) {
  //   (await wait(() => document.querySelector(".ThemeCard"))).click();
  //   (await wait(
  //     () => [...document.querySelectorAll(".react-calendar__month-view__days__day")][30]
  //   )).click();
  //   (await wait(() => document.querySelector(".booking-time-picker__item-button"))).click();
  //   await wait(300);
  //   window.scrollTo(0, 200);
  //   //(await wait(() => document.querySelector(".booking-summary__item.card button"))).click();
  //   //(await wait(() => document.querySelectorAll(".themes-navigation--selectmode a")[2])).click();
  // }
}

const findReact = dom => {
  for (let key in dom) {
    if (key.startsWith("__reactInternalInstance$")) {
      return dom[key]._debugOwner;
    }
  }
  return null;
};

const waitRatio = 2;
const delayDetection = 50;
const countBeforeError = 100;
const wait = async sleep => {
  console.log(
    `DEBUG : ${
      typeof sleep === "function"
        ? "Action:" +
          sleep
            .toString()
            .replace(/(\n|\s+)/g, " ")
            .replace(/\s+/, " ")
            .replace("function () {  return", "")
            .replace(/\}$/, "")
        : "Wait : " + sleep
    }`
  );
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

init();
class Debug extends React.Component {
  render() {
    return null;
  }
}

export default Debug;
