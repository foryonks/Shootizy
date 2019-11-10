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
  ["/:contentId", "/:type/:contentId"],
  asyncRouteWrapper(async (req, res) => {
    const { contentId, type } = req.params;
    const typeAndContentId = (type ? type + "/" : "") + contentId;
    const content = await contentService.getByContentId(typeAndContentId);
    res.json(content);
  })
);

/**
 * Update content
 * only for admin to update/change
 */
routes.post(
  "/",
  //loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const content = req.body;

    const response = await contentService.updateContent(content);
    res.json(response);
  })
);

module.exports = routes;
