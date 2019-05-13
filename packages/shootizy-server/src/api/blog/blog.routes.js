const express = require("express");
const blogService = require("./blog.service");
const { asyncRouteWrapper } = require("api/api.utils");
const loginMiddleware = require("middleware/login");

const routes = express.Router();

/**
 * Only for admin to view/cancel booking
 */
routes.get(
  "/articles",
  //loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const bookings = await blogService.listArticles();
    res.json(bookings);
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
