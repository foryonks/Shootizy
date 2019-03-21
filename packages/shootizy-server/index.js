const path = require("path");
const express = require("express");
const html5History = require("connect-history-api-fallback");

const staticAssetsPath = path.resolve(__dirname, "public");

const app = express();
app.use(html5History());
app.use(express.static(staticAssetsPath));

// Start server
(async () => {
  await app.listen(5000);
})();
