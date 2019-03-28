const winston = require("winston");

winston.exitOnError = false;
winston.clear();
winston.level = process.env.LOG_LEVEL || "info";

winston.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
  })
);

winston.debug("Logger system is up");

module.exports = winston;
