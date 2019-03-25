require("dotenv").config();

const path = require("path");
const express = require("express");
const html5History = require("connect-history-api-fallback");
const compression = require("compression");
const apiRouters = require("api/api.routes");

const staticAssetsPath = path.resolve(__dirname, "../public");

const app = express();

app.use("/api", apiRouters);

app.use(html5History());
app.use(express.static(staticAssetsPath));

app.use(compression());

// Start server
(async () => {
  await app.listen(process.env.SERVER_PORT);
  console.log(`Server started on port ${process.env.SERVER_PORT}`);
})();
