const mongoDb = require("db");
const _pick = require("lodash/pick");
const { CustomError } = require("api/api.errors");
const diacritics = require("diacritics").remove;

const UPDATABLE_FIELDS = ["author", "imageLarge", "imageMini", "slug", "text", "title"];

const formatEntry = ({ _id, ...others }) => ({
  articleId: _id,
  ...others,
});

const listArticles = async ({ categoryId, sort, direction } = {}) => {
  const db = await mongoDb.getInstance();
  const request = {};

  "categoryId", categoryId;
  if (categoryId) {
    request.categoryId = categoryId;
  }
  const sortQuery = {};
  if (sort) {
    sortQuery[sort] = direction;
  }
  const articles = await db
    .collection("blog.articles")
    .find(request)
    .sort(sortQuery)
    .toArray();
  const categories = await listCategories();

  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    let comments = await getCommentsByArticleId(article._id);
    article.commentsCount = comments.length;
  }

  return articles.map(article => ({
    ...formatEntry(article),
    category: categories.find(category => category.categoryId === article.categoryId),
  }));
};

const listArticlesByCategory = async slug => {
  const category = await getCategoryBySlug(slug);
  const articles = await listArticles({ categoryId: category.categoryId });
  return articles;
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
  articleId = articleId.toString();
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
    const { title, slug } = await getArticleById(comments[i].articleId);
    comments[i].article = { title, slug };
  }

  return comments;
};

//const asyncCommentGetArticle = ;

const updateArticle = async articleObj => {
  const db = await mongoDb.getInstance();
  const articleId = mongoDb.getObjectId(articleObj.articleId);

  const article = _pick(articleObj, UPDATABLE_FIELDS);

  const collection = db.collection("blog.articles");
  const result = articleId
    ? await collection.updateOne({ _id: articleId }, { $set: article }, { upsert: true })
    : await collection.insertOne(article);

  const _id = result.upsertedId ? result.upsertedId._id : articleId;
  const resArticle = await db.collection("blog.articles").findOne({ _id });

  return formatEntry(resArticle);
};

const updateCategory = async categoryObj => {
  const db = await mongoDb.getInstance();
  const categoryId = mongoDb.getObjectId(categoryObj._id);

  const category = _pick(categoryObj, ["slug", "name"]);

  const collection = db.collection("blog.categories");
  const result = categoryId
    ? await collection.updateOne({ _id: categoryId }, { $set: category }, { upsert: true })
    : await collection.insertOne(category);

  const _id = result.upsertedId ? result.upsertedId._id : categoryId;
  const resCategory = await collection.findOne({ _id });

  return resCategory;
};

const deleteCategory = async categoryObj => {
  const db = await mongoDb.getInstance();
  const categoryId = mongoDb.getObjectId(categoryObj._id);
  const collection = db.collection("blog.categories");
  const result = await collection.deleteOne({ _id: categoryId });
  return result;
};

const updateArticleCounter = async slug => {
  const db = await mongoDb.getInstance();
  const collection = db.collection("blog.articles");

  const article = await collection.findOne({ slug });
  if (article) {
    if (!article.readCount) {
      article.readCount = 0;
    }
    article.readCount++;
    await collection.updateOne({ _id: article._id }, { $set: article }, { upsert: true });
    return { ok: true };
  } else {
    throw new CustomError("Article not found", 404);
  }
};

/**
 * Search in articles
 * @param {*} search
 */
const search = async search => {
  const db = await mongoDb.getInstance();

  const result = db
    .collection("blog.articles")
    .find({
      $or: [
        {
          title: new RegExp(search, "gi"),
        },
        { text: new RegExp(search, "gi") },
        //text: { $regex: new RegExp(search), $options: "i" },
      ],
    })
    .project({ title: 1, slug: 1, _id: 1 })
    .limit(10)
    .toArray();
  return result;
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
  listArticlesByCategory,
  search,
  updateArticleCounter,
  updateCategory,
  deleteCategory,
};
