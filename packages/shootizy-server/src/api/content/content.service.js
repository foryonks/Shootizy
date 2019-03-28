const _pick = require("lodash/pick");

const mongoDb = require("db");
const { CustomError } = require("api/api.errors");

/**
 * Return content by contentId
 * @param {string} contentId
 * @returns {object}
 */
const getByContentId = async contentId => {
  const db = await mongoDb.getInstance();
  const content = await db.collection("htmlContents").findOne({
    contentId,
  });

  if (!content) {
    throw new CustomError("Content not found", 404);
  }
  return _pick(content, ["contentId", "items"]);
};

/**
 * Return list of contents applied to filters
 * @param {object} [filters]
 * @returns {array}
 */
const list = async (filters = {}) => {
  const db = await mongoDb.getInstance();
  const contents = await db
    .collection("htmlContents")
    .find(filters)
    .toArray();
  return contents.map(item => _pick(item, ["contentId", "items"]));
};

module.exports = {
  getByContentId,
  list,
};
