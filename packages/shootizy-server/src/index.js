require("dotenv").config();

const path = require("path");
const express = require("express");
const html5History = require("connect-history-api-fallback");
const compression = require("compression");
const apiRouters = require("api/api.routes");
const mongoDb = require("db");
const logger = require("logger");
const httpLoggerMiddleware = require("middleware/httpLogger");
const errorMiddleware = require("middleware/error");

const staticAssetsPath = path.resolve(__dirname, "../public");

const app = express();

app.use(httpLoggerMiddleware);
app.use(compression());

// API
app.use("/api", apiRouters);

// Static client contents
app.use(html5History());
app.use(express.static(staticAssetsPath));

// Catch API error
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 3001;
(async () => {
  try {
    const db = await mongoDb.getInstance();
    logger.info(`Succesfully connected to MongoDB database ${db.databaseName}`);
  } catch (error) {
    logger.info(`Error connecting to database: ${error}`);
  }
  await app.listen(PORT);
  logger.info(`Server started on port ${PORT}`);
})();
