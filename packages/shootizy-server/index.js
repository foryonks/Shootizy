require("dotenv").config();

const path = require("path");
const express = require("express");
const html5History = require("connect-history-api-fallback");
const compression = require("compression");

const staticAssetsPath = path.resolve(__dirname, "public");

const app = express();
app.use(html5History());
app.use(compression());
app.use(express.static(staticAssetsPath));

// Start server
(async () => {
  await app.listen(process.env.SERVER_PORT);
  console.log(`Server started on port ${process.env.SERVER_PORT}`);
})();
