const mongoDb = require("db");
const { adminNotificationEmail } = require("email");
const { CustomError } = require("api/api.errors");
const { formatDecimal, isValidDate } = require("utils");

const formatEntry = ({ _id, shootingDate, ...others }) => ({
  ratingId: _id,
  //TO-DO: may be moment js ???
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
 * Return average score
 * @returns {number}
 */
const getAverageScore = async () => {
  const db = await mongoDb.getInstance();

  const result = await db
    .collection("ratings")
    .aggregate([
      {
        $group: {
          _id: null,
          avgScore: { $avg: "$score" },
          count: { $sum: 1 },
        },
      },
    ])
    .next();
  return (
    result && {
      score: formatDecimal(result.avgScore, 1),
      count: result.count,
    }
  );
};

/**
 * Create a rating
 * @param {string} name
 * @param {number} score
 * @param {string} comment
 * @param {Date} shootingDate
 * @returns {object} newly created entry
 */
const create = async (name, score, comment, shootingDate) => {
  if (!name || !score || !comment || !isValidDate(shootingDate)) {
    throw new CustomError("Input error", 400);
  }

  const db = await mongoDb.getInstance();

  const result = await db.collection("ratings").insertOne({
    date: new Date(),
    shootingDate: shootingDate,
    name,
    score,
    comment,
    //TO-DO: should we confirm afterward ???
    isConfirmed: true,
  });
  const rating = await db.collection("ratings").findOne({ _id: result.insertedId });
  const formattedResult = formatEntry(rating);

  // Notification email admin - async in background
  adminNotificationEmail("Un nouveau avis client", formattedResult);

  return formattedResult;
};
module.exports = {
  list,
  create,
  getAverageScore,
};
