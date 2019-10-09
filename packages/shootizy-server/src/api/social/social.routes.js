const express = require("express");
const socialService = require("./social.service");
const { asyncRouteWrapper } = require("api/api.utils");
const { CustomError } = require("api/api.errors");
const loginMiddleware = require("middleware/login");
const routes = express.Router();

/**
 * /api/user/login POST
 */
routes.get(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const instagram = await socialService.list();
    res.json(instagram);
  })
);

/**
 * /api/user/me GET
 */
routes.get("/me", loginMiddleware.checkLogin(false), (req, res) => {
  res.json(req.user);
});

module.exports = routes;
