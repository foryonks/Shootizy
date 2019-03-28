const logger = require("logger");
const { CustomError } = require("api/api.errors");

const isValidationError = error => !!error.status && error.errors && error.errors.length > 0;

const isUnauthorizeError = error => error.status === 401;

const errorMiddleware = (error, req, res, next) => {
  if (error.message && error.stack) {
    logger.error(error.message);
    logger.error(error.stack);
  } else {
    try {
      logger.error(JSON.stringify(error, null, 2));
    } catch (e) {
      logger.error("Unloggable error");
    }
  }

  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      code: error.statusCode,
      message: error.message,
      isCustomError: true,
    });
  } else if (isValidationError(error)) {
    return res.status(error.status).json({
      code: error.status,
      message: "Validation error: " + error.errors.map(e => e.message).join("\n"),
    });
  } else if (isUnauthorizeError(error)) {
    return res
      .set("WWW-Authenticate", error.message)
      .status(error.status)
      .json({
        code: error.status,
        message: error.message,
      });
  }

  res.status(500).json({ code: 500, message: "Unexpected server error" });
};

module.exports = errorMiddleware;
