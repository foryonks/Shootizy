/**
 * All routes will be registered in this file
 */
const express = require("express");
const userRoutes = require("./user/user.routes");

const routes = express.Router();

// User
routes.use("/user", userRoutes);

module.exports = routes;
