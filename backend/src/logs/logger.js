const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
    //  winston.format.json()
  ),
  transports: [
    // Errors go here
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),

    // All logs go here
    new winston.transports.File({
      filename: "logs/combined.log",
    }),

    // Also show logs in terminal
    new winston.transports.Console(),
  ]
});

module.exports = logger;