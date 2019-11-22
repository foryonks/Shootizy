import fecha from "fecha";

/**
 * Return date str in FR format
 * @param {[Date,string]} date
 * @returns {string}
 */
export const getDateStr = date =>
  (date instanceof Date ? date : new Date(date)).toLocaleDateString("fr-FR");

fecha.i18n = {
  dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  monthNamesShort: [
    "Jan.",
    "Fév.",
    "Mar.",
    "Avr.",
    "Mai.",
    "Juin",
    "Juil.",
    "Aout",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  amPm: ["am", "pm"],
  // D is the day of the month, function returns something like...  3rd or 11th
  DoFn: function(D) {
    return D === 1 ? D + "er" : D;
  },
};

/**
 * Get formated date string without timezone
 * @param {Date} date
 * @return {string} yyyy-mm-dd
 */
export const getDateWithoutTimeZone = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const formatDateStd = date => fecha.format(new Date(date), "dddd D MMMM YYYY");

/**
 * Format Date as we want
 * @param {*} date
 */
export const formatDate = (date, format = "DD/MM/YYYY") => fecha.format(new Date(date), format);

/**
 * True if 2 dates are equal
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
export const areEqual = (date1, date2) =>
  (!date1 && !date2) || (!!date1 && !!date2 && date1.getTime() === date2.getTime());
