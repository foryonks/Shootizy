/**
 * All routes will be registered in this file
 */
const express = require("express");
const userRoutes = require("./user/user.routes");
const contentRoutes = require("./content/content.routes");
const productRoutes = require("./product/product.routes");

const routes = express.Router();

// User
routes.use("/user", userRoutes);

// Contents
routes.use("/contents", contentRoutes);

// Products
routes.use("/produits", productRoutes);

module.exports = routes;
