const express = require("express");
const contentService = require("./content.service");
const { asyncRouteWrapper } = require("api/api.utils");

const routes = express.Router();

routes.get(
  "/",
  asyncRouteWrapper(async (req, res) => {
    const { page } = req.query;
    const contents = await contentService.list({ page });
    res.json(contents);
  })
);

routes.get(
  "/:contentId",
  asyncRouteWrapper(async (req, res) => {
    const { contentId } = req.params;
    const content = await contentService.getByContentId(contentId);
    res.json(content);
  })
);

module.exports = routes;
