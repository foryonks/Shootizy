const ig = require("instagram-scraping");
var Twitter = require("twitter");

const twitterCredentials = {
  consumer_key: "WvEDzXWz47NYOrbtQTHCHjnkh",
  consumer_secret: "RGi4PYiXM38xOjRHWIP5KGqEUQ7yqApXvZdVEgt0iKZcMO8xHY",
  access_token_key: "23112467-wW1AqNlng5DYXtNN6gVWZFYakJth8rXZN1uEbhEoH",
  access_token_secret: "ruyteRQDHo1ILSgB0JEOdwfnn1gTijhRLLMSo7MGN1rpv",
};

const twitterAccount = "bernardpivot1";
const instagramAccount = "petitbiscuit";

const client = new Twitter(twitterCredentials);

const twitterGet = (url, params) => {
  return new Promise((resolve, reject) => {
    client.get(url, params, function(error, tweets, response) {
      if (error) reject(error);
      else resolve(tweets);
    });
  });
};

// Mise en cache de 30 minutes pour ce service (cf en bas de fichier)
serviceCache = null;

/**
 * Return list of last social items
 * @returns {array}
 */ false;
const list = async () => {
  if (serviceCache) return serviceCache;
  console.log("je passe dedans");

  const result = await ig.scrapeUserPage(instagramAccount);
  // instagram
  const instagram = result.medias
    .slice(0, 3)
    .map(({ text, display_url, thumbnail, shortcode }) => ({
      type: "instagram",
      text,
      image: display_url,
      thumbnail,
      url: `https://www.instagram.com/p/${shortcode}`,
    }));

  // twitter
  const twitterResultTmp = await twitterGet("statuses/user_timeline", {
    count: 1,
    screen_name: twitterAccount,
    trim_user: true,
  });
  const twitter = twitterResultTmp.map(({ created_at, id_str, text }) => ({
    date: new Date(created_at),
    type: "twitter",
    url: `https://twitter.com/medyboo/status/${id_str}`,
    text,
  }));

  instagram.splice(2, 0, twitter[0]);

  serviceCache = instagram.map((item, index) => ({
    ...item,
    key: index,
  }));

  setTimeout(() => {
    serviceCache = null;
  }, 30 * 60 * 1000);
  return serviceCache;
};

module.exports = {
  list,
};