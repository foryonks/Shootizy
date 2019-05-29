const express = require("express");
const blogService = require("./blog.service");
const { asyncRouteWrapper } = require("api/api.utils");
const loginMiddleware = require("middleware/login");

const routes = express.Router();

/**
 * Return all articles
 */
routes.get(
  "/articles",
  asyncRouteWrapper(async (req, res) => {
    const articles = await blogService.listArticles();
    res.json(articles);
  })
);

/**
 * Return only one article
 */
routes.get(
  "/article/:slug",
  asyncRouteWrapper(async (req, res) => {
    const { slug } = req.params;
    const article = await blogService.getArticleBySlug(slug);
    res.json(article);
  })
);

/**
 * Return only one article
 */
routes.post(
  "/article",
  asyncRouteWrapper(async (req, res) => {
    await blogService.getArticleBySlug(slug);
    res.json({ ok });
  })
);

/**
 * Return only category with all articles
 */
routes.get(
  "/category/:slug",
  asyncRouteWrapper(async (req, res) => {
    const { slug } = req.params;
    const category = await blogService.getCategoryBySlug(slug);
    res.json(category);
  })
);

/**
 * Create new reservation
 */
// routes.post(
//   "/reservations",
//   asyncRouteWrapper(async (req, res) => {
//     const { productId } = req.query;
//     const { name, email, message, bookingTime } = req.body;
//     const newBooking = await blogService.createReservation({
//       name,
//       email,
//       message,
//       bookingTime,
//       productId,
//     });
//     res.json(newBooking);
//   })
// );

/**
 * Create new reservation
 */
// routes.delete(
//   "/reservations/:bookingId",
//   loginMiddleware.checkLogin(true),
//   asyncRouteWrapper(async (req, res) => {
//     const { bookingId } = req.params;
//     await blogService.cancelReservation(bookingId);
//     res.json({ bookingId });
//   })
// );

/**
 * List availability for given date
 */
// routes.get(
//   "/availability",
//   asyncRouteWrapper(async (req, res) => {
//     const { date } = req.query;
//     const list = await blogService.listAvailability(new Date(date));
//     res.json(list);
//   })
// );

module.exports = routes;
