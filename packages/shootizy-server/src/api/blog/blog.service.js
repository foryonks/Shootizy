const mongoDb = require("db");
const _omit = require("lodash/omit");

const { isValidDate, getUTCDate, getTodayUTCDate, addLeadingZero } = require("utils");
const { CustomError } = require("api/api.errors");

const formatEntry = ({ _id, ...others }) => ({
  ...others,
});

const listArticles = async () => {
  const db = await mongoDb.getInstance();
  const articles = await db
    .collection("blog.articles")
    .find()
    .toArray();
  const categories = await listCategories();

  return articles.map(formatEntry).map(article => ({
    ...article,
    category: categories.find(category => category.categoryId == article.categoryId),
  }));
};

const listCategories = async () => {
  const db = await mongoDb.getInstance();
  const categories = await db
    .collection("blog.categories")
    .find()
    .toArray();
  return categories;
};

const getCommentsByArticleId = async articleId => {
  const db = await mongoDb.getInstance();
  const comments = await db
    .collection("blog.comments")
    .find({ articleId: articleId * 1 })
    .toArray();
  console.log(comments);
  return comments.map(formatEntry);
};

const getArticleByAny = async ({ slug, id }) => {
  const db = await mongoDb.getInstance();
  const article = await db.collection("blog.articles").findOne({
    id,
    slug,
  });

  if (!article) {
    throw new CustomError("Article not found", 404);
  }

  const categories = await listCategories();

  delete article._id;
  return {
    ...article,
    category: categories.find(category => category.categoryId == article.categoryId),
  };
};

const getArticleById = async id => {
  return getArticleByAny({ id });
};

const getArticleBySlug = async slug => {
  return getArticleByAny({ slug });
};

const getCategoryBySlug = async slug => {
  const db = await mongoDb.getInstance();
  const category = await db.collection("blog.categories").findOne({
    slug,
  });

  if (!category) {
    throw new CustomError("Category not found", 404);
  }

  const articles = await db
    .collection("blog.articles")
    .find({
      categoryId: category.categoryId,
    })
    .toArray();

  delete category._id;
  return {
    ...category,
    articles: articles.map(article => ({
      ...article,
      category: { ...category },
    })),
  };
};

const updateArticle = async article => {
  const db = await mongoDb.getInstance();
  const { articleId } = article;

  article = _omit(article, ["category", "article"]);

  const result = await db
    .collection("blog.articles")
    .updateOne({ articleId }, { $set: article }, { upsert: true });

  let resArticle;
  if (result.upsertedId) {
    resArticle = await db.collection("blog.articles").findOne({ _id: result.insertedId });
  } else {
    resArticle = await db.collection("blog.articles").findOne({ articleId });
  }

  return resArticle;
};

module.exports = {
  listArticles,
  listCategories,
  getArticleBySlug,
  getCategoryBySlug,
  getArticleById,
  updateArticle,
  getCommentsByArticleId,
};
