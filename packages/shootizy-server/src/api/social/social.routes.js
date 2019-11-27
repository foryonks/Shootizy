const express = require("express");
const socialService = require("./social.service");
const { asyncRouteWrapper } = require("api/api.utils");
const { CustomError } = require("api/api.errors");
const loginMiddleware = require("middleware/login");
const routes = express.Router();

/**
 * /api/social GET
 */
routes.get(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const social = await socialService.list(req.query);
    res.json(social);
  })
);

// /**
//  * /api/user/me GET
//  */
// routes.get("/me", loginMiddleware.checkLogin(false), (req, res) => {
//   res.json(req.user);
// });

module.exports = routes;
