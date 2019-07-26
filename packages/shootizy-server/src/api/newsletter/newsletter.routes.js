const express = require("express");
const newsletterService = require("./newsletter.service");
const { asyncRouteWrapper } = require("api/api.utils");

const routes = express.Router();

/**
 * Subscribe
 */
routes.post(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const { email, ...optins } = req.body;
    await newsletterService.upsert(email, optins);
    res.json("ok");
  })
);

module.exports = routes;
