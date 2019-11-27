//const ig = require("instagram-scraping");
const userInstagram = require("user-instagram");

const Twitter = require("twitter");

const twitterCredentials = {
  consumer_key: "WvEDzXWz47NYOrbtQTHCHjnkh",
  consumer_secret: "RGi4PYiXM38xOjRHWIP5KGqEUQ7yqApXvZdVEgt0iKZcMO8xHY",
  access_token_key: "23112467-wW1AqNlng5DYXtNN6gVWZFYakJth8rXZN1uEbhEoH",
  access_token_secret: "ruyteRQDHo1ILSgB0JEOdwfnn1gTijhRLLMSo7MGN1rpv",
};

const twitterClient = new Twitter(twitterCredentials);

const twitterAccount = "bernardpivot1";
const instagramAccount = "petitbiscuit";

// const twitterGet = (url, params) => {
//   return new Promise((resolve, reject) => {
//     twitterClient.get(url, params, function(error, tweets, response) {
//       if (error) reject(error);
//       else resolve(tweets);
//     });
//   });
// };

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
  const instagramResults = await instagram(instagramAccount, nums - twitterPos.length);

  // twitter
  const twitterResultTmp = await twitterClient.get("statuses/user_timeline", {
    count: twitterPos.length,
    screen_name: twitterAccount,
    trim_user: true,
  });
  const twitterResults = twitterResultTmp.map(({ created_at, id_str, text }) => ({
    date: new Date(created_at),
    type: "twitter",
    url: `https://twitter.com/medyboo/status/${id_str}`,
    text,
  }));

  let twitterIndex = 0;
  twitterPos.forEach(pos => {
    instagramResults.splice(pos, 0, twitterResults[twitterIndex]);
    twitterIndex++;
  });

  serviceCache[serviceCacheKey] = instagramResults.map((item, index) => ({
    ...item,
    key: index,
  }));

  setTimeout(() => {
    delete serviceCache[serviceCacheKey];
  }, 30 * 60 * 1000);
  //console.log(JSON.stringify(serviceCache[serviceCacheKey], null, 2));
  return serviceCache[serviceCacheKey];
};

const instagram = async (instagramAccount, count) => {
  //const result = await ig.scrapeUserPage(instagramAccount);
  const result = await userInstagram("https://www.instagram.com/petitbiscuit/");

  // instagram
  const instagramResults = result.posts
    .slice(0, count)
    .map(({ captionText, picture, shortcode, link }) => ({
      type: "instagram",
      text: captionText,
      image: picture.url,
      thumbnail: picture.thumbnail_640,
      url: link,
      //      url: `https://www.instagram.com/p/${shortcode}`,
    }));
  return instagramResults;
};

module.exports = {
  list,
};
