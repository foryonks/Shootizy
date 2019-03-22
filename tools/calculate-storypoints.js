const fs = require("fs");
const util = require("util");
const path = require("path");
let request = require("request");
const requestPromise = util.promisify(request);
const { boardId, key, token } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../.trello-settings"))
);

async function main() {
  const response = await requestPromise(options);
  if (response.statusCode >= 200 && response.statusCode < 400) {
    calculateTime(JSON.parse(response.body));
  } else {
    console.error(response.body);
    console.log(`If you have a token error you can generate a new token at this address : 
    https://trello.com/1/authorize?expiration=never&scope=read,write,account&response_type=token&name=Server%20Token&key=36f5ffb20817ff2a5a209082e7567fc7
    `);
  }
}

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

var options = {
  method: "GET",
  url: `https://api.trello.com/1/boards/${boardId}`,
  qs: {
    key: key,
    token: token,
    actions: "none",
    boardStars: "none",
    cards: "all",
    card_pluginData: "true",
    checklists: "none",
    customFields: "false",
    fields:
      "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames",
    lists: "open",
    members: "none",
    memberships: "none",
    membersInvited: "none",
    membersInvited_fields: "all",
    pluginData: "false",
    organization: "false",
    organization_pluginData: "false",
    myPrefs: "false",
    tags: "false"
  }
};

function calculateTime(cards) {
  let sum = cards.cards
    .filter(
      card =>
        card.pluginData &&
        card.pluginData.length &&
        card.pluginData[0].idPlugin === "59d4ef8cfea15a55b0086614"
    )
    .map(card => JSON.parse(card.pluginData[0].value).points)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  console.log("Total en heures : %s", sum);
  let totalFormatted = convertMinutes(sum * 60);
  console.log("Total : %s", totalFormatted);
  let hoursPerDays = 5;
  let totalJourOuvres = convertMinutes(sum * 60 * (24 / hoursPerDays));
  console.log(
    `Jours ouvrés : ${totalJourOuvres}, à raison de ${hoursPerDays}h de travail par jour`
  );

  // let totalJourOuvresHorsWeekend = convertMinutes(
  //   (sum * 60 * (24 / 8) * 7) / 5
  // );
  // console.log(
  //   "Jours ouvrés : %s, à raison de 8h de travail par jour, et 5 jours par semaine",
  //   totalJourOuvresHorsWeekend
  // );
}
main();
