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

module.exports = {
  formatDecimal,
};
