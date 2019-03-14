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

console.log("Total en heures : %s", sum);
let totalFormatted = convertMinutes(sum * 60);
console.log("Total : %s", totalFormatted);
let totalJourOuvres = convertMinutes(sum * 60 * (24 / 8));
console.log(
  "Jours ouvrés : %s, à raison de 8h de travail par jour",
  totalJourOuvres
);

let totalJourOuvresHorsWeekend = convertMinutes((sum * 60 * (24 / 8) * 7) / 5);
console.log(
  "Jours ouvrés : %s, à raison de 8h de travail par jour, et 5 jours par semaine",
  totalJourOuvresHorsWeekend
);
