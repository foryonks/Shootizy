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

  return articles.map(article => ({
    ...article,
    articleId: article._id,
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

const getArticleByAny = async ({ slug, id }) => {
  const db = await mongoDb.getInstance();
  const request = {};
  if (slug) request.slug = slug;
  if (id) request._id = mongoDb.getObjectId(id);
  const article = await db.collection("blog.articles").findOne(request);

  if (!article) {
    throw new CustomError("Article not found", 404);
  }

  const categories = await listCategories();

  article._id;
  article.articleId = article._id;

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

  //delete category._id;
  return {
    ...category,
    articles: articles.map(article => ({
      ...article,
      category: { ...category },
    })),
  };
};

const getCommentsByArticleId = async articleId => {
  const db = await mongoDb.getInstance();
  const comments = await db
    .collection("blog.comments")
    .find({ articleId })
    .toArray();
  return comments;
};

const addComment = async ({ author, comment, articleId }) => {
  if (!author || !comment || articleId === null) {
    throw new CustomError("Input error", 400);
  }
  const db = await mongoDb.getInstance();
  const result = await db.collection("blog.comments").insertOne({
    date: new Date(),
    author,
    comment,
    articleId,
  });
  const resultComment = await db.collection("blog.comments").findOne({ _id: result.insertedId });
  delete resultComment._id;
  return resultComment;
};

const getComments = async ({ count = 10, sortBy = "date", order = "asc" }) => {
  const db = await mongoDb.getInstance();
  const comments = await db
    .collection("blog.comments")
    .find({}, { sort: [[sortBy, order]], limit: count * 1 })
    .toArray();

  for (let i = 0; i < comments.length; i++) {
    const { title } = await getArticleById(comments[i].articleId);
    comments[i].article = { title };
  }

  return comments;
};

//const asyncCommentGetArticle = ;

const updateArticle = async article => {
  const db = await mongoDb.getInstance();
  const { articleId } = article;

  article = _omit(article, ["category", "article"]);

  const result = await db
    .collection("blog.articles")
    .updateOne({ _id: articleId }, { $set: article }, { upsert: true });

  let resArticle;
  if (result.upsertedId) {
    resArticle = await db.collection("blog.articles").findOne({ _id: result.insertedId });
  } else {
    resArticle = await db.collection("blog.articles").findOne({ articleId });
  }
  resArticle.articleId = _id;
  return resArticle;
};

module.exports = {
  listArticles,
  listCategories,
  getArticleBySlug,
  getCategoryBySlug,
  getArticleById,
  updateArticle,
  addComment,
  getComments,
  getCommentsByArticleId,
};
