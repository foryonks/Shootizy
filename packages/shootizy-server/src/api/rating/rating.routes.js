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
 * Get average score
 */
routes.get(
  "/average",
  asyncRouteWrapper(async (req, res) => {
    const result = await ratingService.getAverageScore();
    res.json(result);
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
