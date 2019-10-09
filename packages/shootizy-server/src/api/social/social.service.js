const ig = require("instagram-scraping");

const twitterCredentials = {
  consumer_key: "WvEDzXWz47NYOrbtQTHCHjnkh",
  consumer_secret: "RGi4PYiXM38xOjRHWIP5KGqEUQ7yqApXvZdVEgt0iKZcMO8xHY",
  access_token_key: "23112467-wW1AqNlng5DYXtNN6gVWZFYakJth8rXZN1uEbhEoH",
  access_token_secret: "ruyteRQDHo1ILSgB0JEOdwfnn1gTijhRLLMSo7MGN1rpv",
};

/**
 * Return list of customers' ratings
 * @returns {array}
 */
const list = async () => {
  const result = await ig.scrapeUserPage("petitbiscuit");
  const cleanResult = result.medias.map(({ text, display_url, thumbnail, shortcode }) => ({
    text,
    display_url,
    thumbnail,
    url: `https://www.instagram.com/p/${shortcode}`,
  }));
  console.log(JSON.stringify(result, null, 4));

  return result;
};

module.exports = {
  list,
};
