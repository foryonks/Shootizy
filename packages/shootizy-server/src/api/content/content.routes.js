const express = require("express");
const contentService = require("./content.service");
const { asyncRouteWrapper } = require("api/api.utils");
const loginMiddleware = require("middleware/login");

const routes = express.Router();

/**
 * Only for admin to view/set contents
 */
routes.get(
  "/",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const { tags } = req.query;
    const filters = {
      ...(tags ? { tags: tags.split(",") } : {}),
    };

    const contents = await contentService.list(filters);
    res.json(contents);
  })
);

/**
 * For wepapp to retrieve content
 */
routes.get(
  "/:contentId",
  asyncRouteWrapper(async (req, res) => {
    const { contentId } = req.params;
    const content = await contentService.getByContentId(contentId);
    res.json(content);
  })
);

module.exports = routes;
