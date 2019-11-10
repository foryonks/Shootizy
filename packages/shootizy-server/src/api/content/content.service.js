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
 * Return content by contentId
 * @param {string} contentId
 * @returns {object}
 */
const updateContent = async content => {
  const db = await mongoDb.getInstance();
  const contentId = content.contentId || (content.type ? content.type + "/" : "") + content.slug;

  const result = await db
    .collection("contents")
    .updateOne({ contentId }, { $set: content }, { upsert: true });

  const contentUpdated = await db.collection("contents").findOne({ contentId });
  return contentUpdated;
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
  updateContent,
};
