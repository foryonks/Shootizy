const _pick = require("lodash/pick");

const mongoDb = require("db");
const { isValidDate, getUTCDate, getTodayUTCDate, getDateStr, addLeadingZero } = require("utils");
const { CustomError } = require("api/api.errors");
const { sendEmail, adminNotificationEmail, TEMPLATES } = require("email");
const { upsert: subscribeNewsletter } = require("api/newsletter/newsletter.service");

const formatEntry = ({ _id, startDate, endDate, ...others }) => ({
  bookingId: _id,
  date: startDate,
  startTime: `${addLeadingZero(startDate.getUTCHours())}:${addLeadingZero(
    startDate.getUTCMinutes()
  )}`,
  endTime: `${addLeadingZero(endDate.getUTCHours())}:${addLeadingZero(endDate.getUTCMinutes())}`,
  ...others,
});

/**
 * List all upcoming schedule
 * @returns {array}
 */
const listReservations = async () => {
  const db = await mongoDb.getInstance();
  const list = await db
    .collection("bookings")
    .aggregate([
      {
        $match: { startDate: { $gte: getTodayUTCDate() } },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "productId",
          as: "product",
        },
      },
      {
        $unwind: {
          path: "$product",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          "product._id": 0,
          "product.tags": 0,
          "product.gallery": 0,
          "product.descTitle": 0,
          "product.description": 0,
          "product.price": 0,
        },
      },
    ])
    .sort({ startDate: 1 })
    .toArray();

  return list.map(formatEntry);
};

/**
 * List availability for given date
 * @param {Date} date
 * @returns {array} { startTime, endTime, isAvailable }
 */
const listAvailability = async date => {
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
};

/**
 * Get UTC datetime to avoid timezone
 * @param {Date} date
 * @param {string} startTime
 * @param {string} endTime
 * @returns {object} {startDate, endDate}
 */
const getUTCBookingDate = (date, startTime, endTime) => {
  if (!isValidDate(date) || !startTime || !endTime) {
    throw new CustomError("Date input error", 400);
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const [startHour, startMinute] = startTime.split(":");
  const [endHour, endMinute] = endTime.split(":");

  const startDate = new Date(Date.UTC(year, month, day, startHour, startMinute || 0));
  const endDate = new Date(Date.UTC(year, month, day, endHour, endMinute || 0));

  return { startDate, endDate };
};

const UPSERTABLE_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "productId",
  "phone",
  "cgv",
  "message",
  "birthdate",
  "parentCode",
  "newsletterGeneral",
];
const REQUIRED_FIELDS = ["firstName", "lastName", "email", "bookingTime", "productId", "cgv"];
/**
 * Create a reservation
 * @param {object} reservation to be created
 * @returns {object} newly created reservation
 */
const createReservation = async reservation => {
  const { email, bookingTime, newsletterGeneral } = reservation;
  if (REQUIRED_FIELDS.some(fieldName => !reservation[fieldName])) {
    throw new CustomError(
      "Input error" + REQUIRED_FIELDS.find(fieldName => !reservation[fieldName]),
      400
    );
  }

  const { startDate, endDate } = getUTCBookingDate(
    new Date(bookingTime.date),
    bookingTime.startTime,
    bookingTime.endTime
  );

  const db = await mongoDb.getInstance();

  // Check existed booking at same time
  const existedBooking = await db.collection("bookings").findOne({
    $or: [
      {
        startDate: {
          $gte: startDate,
          $lt: endDate,
        },
      },
      {
        endDate: {
          $gt: startDate,
          $lte: endDate,
        },
      },
    ],
  });
  if (existedBooking) {
    throw new CustomError("Créneau indisponible, veuillez sélectionner un autre créneau", 400);
  }
  const result = await db.collection("bookings").insertOne({
    ..._pick(reservation, UPSERTABLE_FIELDS),
    startDate,
    endDate,
  });
  const newReservation = await db.collection("bookings").findOne({ _id: result.insertedId });
  const formattedResult = formatEntry(newReservation);

  // Notification email admin - async in background
  adminNotificationEmail("Une nouvelle réservation", formattedResult);

  // Confirmation mail - async in background
  sendEmail(email, TEMPLATES.BOOKING_CONFIRM, {
    DATE: getDateStr(startDate),
    TIMESLOT: bookingTime.startTime,
  });

  // Subscribe Newsletter - async in background
  if (newsletterGeneral) {
    subscribeNewsletter(email, { general: true });
  }

  return formattedResult;
};

/**
 * Cancel a reservation
 * @param {string} bookingId
 */
const cancelReservation = async bookingId => {
  const db = await mongoDb.getInstance();
  const reservation = await db.collection("bookings").findOne({
    _id: mongoDb.getObjectId(bookingId),
  });
  if (reservation) {
    db.collection("bookings").deleteOne({
      _id: mongoDb.getObjectId(bookingId),
    });

    // Confirmation mail - async in background
    sendEmail(reservation.email, TEMPLATES.BOOKING_CANCEL, {
      DATE: getDateStr(reservation.startDate),
      TIMESLOT: formatEntry(reservation).startTime,
    });
  }
  return { bookingId };
};

module.exports = {
  listReservations,
  listAvailability,
  createReservation,
  cancelReservation,
};
