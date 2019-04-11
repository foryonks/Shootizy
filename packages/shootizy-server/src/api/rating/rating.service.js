const mongoDb = require("db");

const formatEntry = ({ _id, date, ...others }) => ({
  ratingId: _id,
  date: date.toDateString(),
  ...others,
});

/**
 * Return list of customers' ratings
 * @returns {array}
 */
const list = async () => {
  const db = await mongoDb.getInstance();

  const ratings = await db
    .collection("ratings")
    .find()
    .toArray();
  return ratings.map(formatEntry);
};

/**
 * Create a rating
 * @param {string} name
 * @param {number} score
 * @param {string} comment
 */
const create = async (name, score, comment) => {
  const db = await mongoDb.getInstance();

  const result = await db.collection("ratings").insertOne({
    date: new Date(),
    name,
    score,
    comment,
  });
  const rating = await db.collection("ratings").findOne({ _id: result.insertedId });
  return formatEntry(rating);
};
module.exports = {
  list,
  create,
};
