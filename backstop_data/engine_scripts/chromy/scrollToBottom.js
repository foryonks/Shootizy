module.exports = function(chromy, scenario) {
  if (scenario.scrollToBottom) {
    for (var i = 0; i < 20; i++) {
      chromy.scroll(0, 1000).wait(100);
      console.log(i);
    }
  }
};
