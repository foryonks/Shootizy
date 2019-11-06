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
const serviceCache = {};

/**
 * Return list of last social items
 * @returns {array}
 */ false;
const list = async ({ nums = 4, twitterPos = "2" }) => {
  const serviceCacheKey = [`${nums}-${twitterPos}`];
  twitterPos = !twitterPos ? [] : twitterPos.split(",");

  if (serviceCache[serviceCacheKey]) return serviceCache[serviceCacheKey];
  const result = await ig.scrapeUserPage(instagramAccount);
  // instagram
  const instagram = result.medias
    .slice(0, nums - twitterPos.length)
    .map(({ text, display_url, thumbnail, shortcode, url }) => ({
      type: "instagram",
      text,
      image: display_url,
      thumbnail,
      url,
      //      url: `https://www.instagram.com/p/${shortcode}`,
    }));

  console.log(result.total);

  // twitter
  const twitterResultTmp = await twitterGet("statuses/user_timeline", {
    count: twitterPos.length,
    screen_name: twitterAccount,
    trim_user: true,
  });
  const twitter = twitterResultTmp.map(({ created_at, id_str, text }) => ({
    date: new Date(created_at),
    type: "twitter",
    url: `https://twitter.com/medyboo/status/${id_str}`,
    text,
  }));

  let twitterIndex = 0;
  twitterPos.forEach(pos => {
    instagram.splice(pos, 0, twitter[twitterIndex]);
    twitterIndex++;
  });

  serviceCache[serviceCacheKey] = instagram.map((item, index) => ({
    ...item,
    key: index,
  }));

  setTimeout(() => {
    delete serviceCache[serviceCacheKey];
  }, 30 * 60 * 1000);
  return serviceCache[serviceCacheKey];
};

module.exports = {
  list,
};
