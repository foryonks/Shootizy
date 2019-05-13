const express = require("express");
const userService = require("./user.service");
const { asyncRouteWrapper } = require("api/api.utils");
const { CustomError } = require("api/api.errors");
const loginMiddleware = require("middleware/login");
const routes = express.Router();

/**
 * /api/user/login POST
 */
routes.post(
  "/login",
  asyncRouteWrapper(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new CustomError("Login request failed", 400);
    }
    const credentials = await userService.login(username, password);
    res.json(credentials);
  })
);

/**
 * /api/user/me GET
 */
routes.get("/me", loginMiddleware.checkLogin(false), (req, res) => {
  res.json(req.user);
});

module.exports = routes;
