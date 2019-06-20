const NB_PLACES_DECIMAL_MAX = 2;
// BUG When a number too small => NaN => check a min value
const MIN_VALUE = 0.000001;
/**
 * Convert a long float in to a certain length
 * @param {number} number the number to be formatted
 * @param {number} places number of decimal digits
 * @returns {number} formatted number
 */
const formatDecimal = (number, places = NB_PLACES_DECIMAL_MAX) =>
  !isNaN(number)
    ? Math.abs(number) > MIN_VALUE
      ? +(Math.round(number + "e+" + places) + "e-" + places)
      : 0
    : NaN;

/**
 * Check if date is valid
 * @param {*} date
 * @returns {boolean}
 */
const isValidDate = date => !!date && date instanceof Date && !isNaN(date);

/**
 * Get UTC date
 * @param {Date} date
 * @returns {Date}
 */
const getUTCDate = date => {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
};

/**
 * Get today UTC date
 * @returns {Date}
 */
const getTodayUTCDate = () => {
  const today = new Date();
  return getUTCDate(today);
};

/**
 * Return date str in FR format
 * @param {[Date,string]} date
 * @returns {string}
 */
const getDateStr = date => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
};

/**
 * Add leading zero for date
 * @param {[string|number]} value
 */
const addLeadingZero = value => (Number(value) < 10 ? `0${value}` : value);

module.exports = {
  formatDecimal,
  isValidDate,
  getUTCDate,
  getDateStr,
  getTodayUTCDate,
  addLeadingZero,
};
