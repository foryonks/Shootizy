/**
 * All routes will be registered in this file
 */
const express = require("express");
const userRoutes = require("./user/user.routes");
const contentRoutes = require("./content/content.routes");
const productRoutes = require("./product/product.routes");
const ratingRoutes = require("./rating/rating.routes");
const bookingRoutes = require("./booking/booking.routes");
const contactRoutes = require("./contact/contact.routes");
const newsletterRoutes = require("./newsletter/newsletter.routes");
const blogRoutes = require("./blog/blog.routes");
const fileRoutes = require("./file/file.routes");
const socialRoutes = require("./social/social.routes");

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

// Contact
routes.use("/contact", contactRoutes);

// Newsletter
routes.use("/newsletter", newsletterRoutes);

// Blog
routes.use("/blog", blogRoutes);

// Files
routes.use("/file", fileRoutes);

// Instagram
routes.use("/social", socialRoutes);

module.exports = routes;
