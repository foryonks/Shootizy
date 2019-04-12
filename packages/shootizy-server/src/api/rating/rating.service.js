const mongoDb = require("db");

const formatEntry = ({ _id, shootingDate, ...others }) => ({
  ratingId: _id,
  shootingDate: shootingDate.toDateString(),
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
    .find({ isConfirmed: true })
    .toArray();
  return ratings.map(formatEntry);
};

/**
 * Create a rating
 * @param {string} name
 * @param {number} score
 * @param {string} comment
 * @param {date} shootingDate
 */
const create = async (name, score, comment, shootingDate) => {
  const db = await mongoDb.getInstance();

  const result = await db.collection("ratings").insertOne({
    date: new Date(),
    shootingDate: new Date(shootingDate),
    name,
    score,
    comment,
    //TO-DO: should we confirm afterward ???
    isConfirmed: true,
  });
  const rating = await db.collection("ratings").findOne({ _id: result.insertedId });
  return formatEntry(rating);
};
module.exports = {
  list,
  create,
};
