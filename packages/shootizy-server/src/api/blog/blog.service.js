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

const getArticleBySlug = async slug => {
  const db = await mongoDb.getInstance();
  const article = await db.collection("blog.articles").findOne({
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

  //return _omit(article, ["_id"]);
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

  //return _omit(article, ["_id"]);
};

// const formatEntry = ({ _id, startDate, endDate, ...others }) => ({
//   bookingId: _id,
//   date: startDate,
//   startTime: `${addLeadingZero(startDate.getUTCHours())}:${addLeadingZero(
//     startDate.getUTCMinutes()
//   )}`,
//   endTime: `${addLeadingZero(endDate.getUTCHours())}:${addLeadingZero(endDate.getUTCMinutes())}`,
//   ...others,
// });

/**
 * List all upcoming schedule
 * @returns {array}
 */
// const listReservations = async () => {
//   const db = await mongoDb.getInstance();
//   const list = await db
//     .collection("bookings")
//     .aggregate([
//       {
//         $match: { startDate: { $gte: getTodayUTCDate() } },
//       },
//       {
//         $lookup: {
//           from: "products",
//           localField: "productId",
//           foreignField: "productId",
//           as: "product",
//         },
//       },
//       {
//         $unwind: {
//           path: "$product",
//           preserveNullAndEmptyArrays: true,
//         },
//       },
//       {
//         $project: {
//           "product._id": 0,
//           "product.tags": 0,
//           "product.gallery": 0,
//           "product.descTitle": 0,
//           "product.description": 0,
//           "product.price": 0,
//         },
//       },
//     ])
//     .sort({ startDate: 1 })
//     .toArray();

//   return list.map(formatEntry);
// };

/**
 * List availability for given date
 * @param {Date} date
 * @returns {array} { startTime, endTime, isAvailable }
 */
/* const listAvailability = async date => {
  if (!isValidDate(date)) {
    throw new CustomError("Date invalide", 400);
  }
  const day = date.getDay();

  const db = await mongoDb.getInstance();

  const theFollowingDay = new Date(getUTCDate(date).setDate(date.getDate() + 1));
  const existedBookings = await db
    .collection("bookings")
    .find({
      startDate: {
        $gte: getUTCDate(date),
        $lt: theFollowingDay,
      },
    })
    .toArray();

  const result = await db.collection("workingSchedules").findOne({ day });
  return result.timetable.map(({ startTime, endTime }) => {
    const { startDate, endDate } = getUTCBookingDate(date, startTime, endTime);
    const isAvailable = existedBookings.every(
      booking => booking.endDate <= startDate || booking.startDate >= endDate
    );
    return { startTime, endTime, isAvailable };
  });
}; */

/**
 * Get UTC datetime to avoid timezone
 * @param {Date} date
 * @param {string} startTime
 * @param {string} endTime
 * @returns {object} {startDate, endDate}
 */
// const getUTCBookingDate = (date, startTime, endTime) => {
//   if (!isValidDate(date) || !startTime || !endTime) {
//     throw new CustomError("Date input error", 400);
//   }
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDate();

//   const [startHour, startMinute] = startTime.split(":");
//   const [endHour, endMinute] = endTime.split(":");

//   const startDate = new Date(Date.UTC(year, month, day, startHour, startMinute || 0));
//   const endDate = new Date(Date.UTC(year, month, day, endHour, endMinute || 0));

//   return { startDate, endDate };
// };

/**
 * Create a reservation
 * @param {object} reservation to be created
 * @returns {object} newly created reservation
 */
// const createReservation = async reservation => {
//   const { name, email, message, bookingTime, productId } = reservation;
//   if (!name || !email || !message || !bookingTime) {
//     throw new CustomError("Input error", 400);
//   }

//   const { startDate, endDate } = getUTCBookingDate(
//     new Date(bookingTime.date),
//     bookingTime.startTime,
//     bookingTime.endTime
//   );

//   const db = await mongoDb.getInstance();

//   // Check existed booking at same time
//   const existedBooking = await db.collection("bookings").findOne({
//     $or: [
//       {
//         startDate: {
//           $gte: startDate,
//           $lt: endDate,
//         },
//       },
//       {
//         endDate: {
//           $gt: startDate,
//           $lte: endDate,
//         },
//       },
//     ],
//   });
//   if (existedBooking) {
//     throw new CustomError("Créneau indisponible, veuillez sélectionner un autre créneau", 400);
//   }
//   const result = await db.collection("bookings").insertOne({
//     name,
//     email,
//     message,
//     productId,
//     startDate,
//     endDate,
//   });
//   const rating = await db.collection("bookings").findOne({ _id: result.insertedId });
//   return formatEntry(rating);
// };

/**
 * Cancel a reservation
 * @param {string} bookingId
 */
// const cancelReservation = async bookingId => {
//   const db = await mongoDb.getInstance();
//   db.collection("bookings").remove({
//     _id: mongoDb.getObjectId(bookingId),
//   });
// };

module.exports = {
  listArticles,
  getArticleBySlug,
  getCategoryBySlug,
  // listReservations,
  // listAvailability,
  // createReservation,
  // cancelReservation,
};
