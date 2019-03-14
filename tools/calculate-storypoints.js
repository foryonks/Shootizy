const exported = require("./exported.json");

let sum = exported.cards
  .filter(
    card =>
      card.pluginData &&
      card.pluginData.length &&
      card.pluginData[0].idPlugin === "59d4ef8cfea15a55b0086614"
  )
  .map(card => JSON.parse(card.pluginData[0].value).points)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

//minutes to hour (and days) converter
function convertMinutes(num) {
  let d = Math.floor(num / 1440); // 60*24
  let h = Math.floor((num - d * 1440) / 60);
  let m = Math.round(num % 60);

  if (d > 0) {
    return d + " days, " + h + " hours, " + m + " minutes";
  } else {
    return h + " hours, " + m + " minutes";
  }
}

console.log(convertMinutes(sum * 60));
