const _omit = require("lodash/omit");

const mongoDb = require("db");
const { CustomError } = require("api/api.errors");

/**
 * Return content by contentId
 * @param {string} contentId
 * @returns {object}
 */
const getByContentId = async contentId => {
  const db = await mongoDb.getInstance();
  const content = await db.collection("contents").findOne({
    contentId,
  });

  if (!content) {
    throw new CustomError("Content not found", 404);
  }
  return _omit(content, ["_id"]);
};

/**
 * Return list of contents applied to filters
 * @param {object} [filters]
 * @returns {array}
 */
const list = async (filters = {}) => {
  const db = await mongoDb.getInstance();

  let query = {};
  if (filters.tags) {
    query.tags = {
      $in: filters.tags,
    };
  }
  const contents = await db
    .collection("contents")
    .find(query)
    .toArray();
  return contents.map(item => _omit(item, ["_id"]));
};

module.exports = {
  getByContentId,
  list,
};
