const express = require("express");
const ratingService = require("./rating.service");
const { asyncRouteWrapper } = require("api/api.utils");

const routes = express.Router();

/**
 * List ratings
 */
routes.get(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const ratings = await ratingService.list();
    res.json(ratings);
  })
);

/**
 * For wepapp to retrive rating
 */
routes.post(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const { name, score, comment, shootingDate } = req.body;
    const rating = await ratingService.create(name, score, comment, shootingDate);
    res.json(rating);
  })
);

module.exports = routes;
