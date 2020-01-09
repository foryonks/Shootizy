module.exports = async (page, scenario, vp) => {
  const ignoredMessages = [
    "Download the React DevTools for a better development experience",
    "BackstopTools have been installed",
    "* Move code with side effects",
    "* Rename component",
    "e UNSAFE_ name will work",
    "* If you're updating state",
    "Please update the following components",
    "JSHandle:font-weight:bold",
    "JSHandle:[HMR] Waiting for update signal from WDS...",
    "Cookie state restored with:",
  ];
  console.warn = () => {};
  console.log = message => {
    ignoredMessages.some(ignore => message.indexOf(ignore) !== -1)
      ? undefined
      : process.stdout.write(`${message}\n`);
  };

  await require("./loadCookies")(page, scenario);
};
