const _omit = require("lodash/omit");

const mongoDb = require("db");
const { CustomError } = require("api/api.errors");

/**
 * Return product by productId
 * @param {string} productId
 * @returns {object}
 */
const getByProductId = async productId => {
  const db = await mongoDb.getInstance();
  const product = await db.collection("products").findOne({
    productId,
  });

  if (!product) {
    throw new CustomError("Product not found", 404);
  }
  return _omit(product, ["_id"]);
};

/**
 * Return list of products applied to filters
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
  const products = await db
    .collection("products")
    .find(query)
    .toArray();
  return products.map(item => _omit(item, ["_id"]));
};

module.exports = {
  getByProductId,
  list,
};
