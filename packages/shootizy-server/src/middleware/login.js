const jwt = require("jsonwebtoken");
const logger = require("logger");
const { CustomError } = require("api/api.errors");

const { JWT_SECRET, USE_DEV_TOKEN } = process.env;

/**
 * Check if any user is connected (via req header token)
 */
const retrieveUser = () => (req, res, next) => {
  if (USE_DEV_TOKEN === "true") {
    const devUser = { username: "devUser", isAdmin: true };
    req.user = devUser;
    logger.info(`User login bypassed ${JSON.stringify(devUser)}`);
    next();
  } else {
    let token = req.headers["x-access-token"] || req.headers["authorization"]; // Express headers are auto converted to lowercase

    if (token) {
      if (token.startsWith("Bearer ")) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }

      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (!err && decoded) {
          const { user } = decoded;
          // Append user to req
          req.user = user;
          logger.info(`User connected ${JSON.stringify(user)}`);
        }
        next();
      });
    } else {
      next();
    }
  }
};

/**
 * Check if user is logged in
 * @param {boolean} [isAdmin] true if require admin rights (default : true)
 */
const checkLogin = (isAdmin = true) => (req, res, next) => {
  const { user } = req;
  if (user) {
    if (!isAdmin || user.isAdmin) {
      // Allow access
      next();
    } else {
      next(new CustomError("Access denied", 403));
    }
  } else {
    next(new CustomError("User not logged in", 401));
  }
};

module.exports = {
  retrieveUser,
  checkLogin,
};
