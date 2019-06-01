const express = require("express");
const blogService = require("./blog.service");
const { asyncRouteWrapper } = require("api/api.utils");
const loginMiddleware = require("middleware/login");

const routes = express.Router();

/**
 * Return all articles
 */
routes.get(
  "/articles",
  asyncRouteWrapper(async (req, res) => {
    const articles = await blogService.listArticles();
    res.json(articles);
  })
);

/**
 * Return only one article
 */
routes.get(
  "/article/:slug",
  asyncRouteWrapper(async (req, res) => {
    const { slug } = req.params;
    const article = await blogService.getArticleBySlug(slug);
    res.json(article);
  })
);

/**
 * update admin article
 */
routes.post(
  "/article",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const article = req.body;
    const response = await blogService.updateArticle(article);
    console.log("response ======");
    console.log(response);
    res.json(response);
  })
);

/**
 * Return only category with all articles
 */
routes.get(
  "/category/:slug",

  asyncRouteWrapper(async (req, res) => {
    const { slug } = req.params;
    const category = await blogService.getCategoryBySlug(slug);
    res.json(category);
  })
);

module.exports = routes;
