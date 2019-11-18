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
    const query = req.query;
    const articles = await blogService.listArticles(query);
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

/**
 * update admin article
 */
routes.post(
  "/category",
  loginMiddleware.checkLogin(true),
  asyncRouteWrapper(async (req, res) => {
    const category = req.body;
    const response = await blogService.updateCategory(category);
    res.json(response);
  })
);

/**
 * increase article read counter
 */
routes.get(
  "/article-read-count/:slug",
  asyncRouteWrapper(async (req, res) => {
    const { slug } = req.params;
    const response = await blogService.updateArticleCounter(slug);
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
    const articles = await blogService.listArticlesByCategory(slug);
    res.json(articles);
  })
);

routes.get(
  "/search/:search",
  asyncRouteWrapper(async (req, res) => {
    const { search } = req.params;
    const response = await blogService.search(search);
    res.json(response);
  })
);

module.exports = routes;
