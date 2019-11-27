const _pick = require("lodash/pick");
const _omit = require("lodash/omit");

const mongoDb = require("db");
const { CustomError } = require("api/api.errors");

const UPDATABLE_FIELDS = ["gallery", "textImage"];

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

/**
 * Update product
 * @param {string} productId
 * @param {object} product
 * @returns {object} updated product
 */
const update = async (productId, product) => {
  const db = await mongoDb.getInstance();
  const result = await db
    .collection("products")
    .findOneAndUpdate(
      { productId },
      { $set: _pick(product, UPDATABLE_FIELDS) },
      { returnOriginal: false }
    );

  return _omit(result.value, ["_id"]);
};

module.exports = {
  getByProductId,
  list,
  update,
};
