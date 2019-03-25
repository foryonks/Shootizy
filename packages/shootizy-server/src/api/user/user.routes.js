const express = require("express");
const userService = require("./user.service");

const routes = express.Router();

routes.get("/me", async (req, res) => {
  const user = await userService.getConnectedUser();
  res.json(user);
});

module.exports = routes;
