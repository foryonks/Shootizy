/**
 * All routes will be registered in this file
 */
const express = require("express");
const userRoutes = require("./user/user.routes");
const contentRoutes = require("./content/content.routes");
const productRoutes = require("./product/product.routes");
const ratingRoutes = require("./rating/rating.routes");
const bookingRoutes = require("./booking/booking.routes");
const blogRoutes = require("./blog/blog.routes");

const routes = express.Router();

// User
routes.use("/user", userRoutes);

// Contents
routes.use("/contents", contentRoutes);

// Products
routes.use("/products", productRoutes);

// Rating
routes.use("/ratings", ratingRoutes);

// Booking
routes.use("/booking", bookingRoutes);

// Blog
routes.use("/blog", blogRoutes);

module.exports = routes;
