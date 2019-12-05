module.exports = function(chromy, scenario) {
  const clickSelector = scenario.bookingClickSelector;
  if (clickSelector) {
    chromy
      .wait(clickSelector)
      .click(clickSelector)
      .wait(1000);
  }
};
