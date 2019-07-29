const mongoDb = require("db");
const { sendEmail, adminNotificationEmail, TEMPLATES } = require("email");
const _pick = require("lodash/pick");

/**
 * Save contact request
 * @param {string} type contact type
 * @param {Object} formData data
 * @param {Array} fields form fields
 */
const add = async (type, formData, fields) => {
  const db = await mongoDb.getInstance();
  const data = _pick(formData, fields);
  await db.collection("contacts").insertOne({
    type,
    date: new Date(),
    data,
  });

  // Notification email admin - async in background
  adminNotificationEmail("Une nouvelle demande de contact", data);

  // Confirmation mail - async in background
  if (formData.email) {
    sendEmail(formData.email, TEMPLATES.CONTACT_GENERAL);
  }
};

module.exports = {
  add,
};
