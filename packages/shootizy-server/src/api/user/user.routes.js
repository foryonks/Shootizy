const express = require("express");
const userService = require("./user.service");
const { asyncRouteWrapper } = require("api/api.utils");

const routes = express.Router();

routes.get(
  "/me",
  asyncRouteWrapper(async (req, res) => {
    const user = await userService.getConnectedUser();
    res.json(user);
  })
);

module.exports = routes;
