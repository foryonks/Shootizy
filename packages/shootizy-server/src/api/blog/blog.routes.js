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
    res.json(response);
  })
);

routes.post(
  "/comments",
  asyncRouteWrapper(async (req, res) => {
    const params = req.body;
    const comments = await blogService.getComments(params);
    res.json(comments);
  })
);

/**
 * Return comments from one article (by articleId)
 */
routes.get(
  "/comments/article/:articleId",
  asyncRouteWrapper(async (req, res) => {
    const { articleId } = req.params;
    const comments = await blogService.getCommentsByArticleId(articleId);
    res.json(comments);
  })
);

/**
 * Post comment for article with articleId
 */
routes.post(
  "/comment",
  asyncRouteWrapper(async (req, res) => {
    const comment = req.body;
    const response = await blogService.addComment(comment);
    res.json(response);
  })
);

/**
 * update admin article
 */
// routes.post(
//   "/comment",
//   asyncRouteWrapper(async (req, res) => {
//     const article = req.body;
//     const response = await blogService.updateArticle(article);
//     res.json(response);
//   })
// );

/**
 * Return all articles
 */
routes.get(
  "/categories",
  asyncRouteWrapper(async (req, res) => {
    const categories = await blogService.listCategories();
    res.json(categories);
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

/**
 * Return only category with all articles
 */
routes.get(
  "/category/:slug/articles",

  asyncRouteWrapper(async (req, res) => {
    const { slug } = req.params;
    console.log("category", slug);
    const articles = await blogService.listArticlesByCategory(slug);
    res.json(articles);
  })
);

module.exports = routes;
