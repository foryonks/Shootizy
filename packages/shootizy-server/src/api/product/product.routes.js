const express = require("express");
const productService = require("./product.service");
const { asyncRouteWrapper } = require("api/api.utils");

const routes = express.Router();

/**
 * List products
 */
routes.get(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const { tags } = req.query;
    const filters = {
      ...(tags ? { tags: tags.split(",") } : {}),
    };

    const products = await productService.list(filters);
    res.json(products);
  })
);

/**
 * For wepapp to retrive product
 */
routes.get(
  "/:productId",
  asyncRouteWrapper(async (req, res) => {
    const { productId } = req.params;
    const product = await productService.getByProductId(productId);
    res.json(product);
  })
);

module.exports = routes;
