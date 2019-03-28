const morgan = require("morgan");
const logger = require("logger");

const httpLoggerMiddleware = morgan(":method :url :status :response-time ms", {
  stream: { write: logger.info },
});

module.exports = httpLoggerMiddleware;
