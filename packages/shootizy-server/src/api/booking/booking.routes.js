const express = require("express");
const bookingService = require("./booking.service");
const { asyncRouteWrapper } = require("api/api.utils");
const loginMiddleware = require("middleware/login");

const routes = express.Router();

/**
 * Only for admin to view/cancel booking
 */
routes.get(
  "/reservations",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const bookings = await bookingService.listReservations();
    res.json(bookings);
  })
);

/**
 * Create new reservation
 */
routes.post(
  "/reservations",
  asyncRouteWrapper(async (req, res) => {
    const { name, email, message, bookingTime, productId } = req.body;
    const newBooking = await bookingService.createReservation({
      name,
      email,
      message,
      bookingTime,
      productId,
    });
    res.json(newBooking);
  })
);

/**
 * Create new reservation
 */
routes.delete(
  "/reservations/:bookingId",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const { bookingId } = req.params;
    await bookingService.cancelReservation(bookingId);
    res.json({ bookingId });
  })
);

/**
 * List availability for given date
 */
routes.get(
  "/availability",
  asyncRouteWrapper(async (req, res) => {
    const { date } = req.query;
    const list = await bookingService.listAvailability(new Date(date));
    res.json(list);
  })
);

module.exports = routes;
