/**
 * Wraps an async route handler.
 * Forwards the error to next when necessary. This way, we can handle all errors
 * in one place
 * @param {function} routeHandler An express route handler
 * @returns {function} A new route handler with error managed
 */
const asyncRouteWrapper = routeHandler => async (req, res, next) => {
  try {
    await routeHandler(req, res, next);
  } catch (error) {
    // Forward error to error middleware
    next(error);
  }
};

module.exports = {
  asyncRouteWrapper,
};
