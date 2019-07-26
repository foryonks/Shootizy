const mongoDb = require("db");
const { sendEmail, TEMPLATES } = require("email");
const _pick = require("lodash/pick");

/**
 * Save contact request
 * @param {string} type contact type
 * @param {Object} formData data
 * @param {Array} fields form fields
 */
const add = async (type, formData, fields) => {
  const db = await mongoDb.getInstance();

  await db.collection("contacts").insertOne({
    type,
    data: {
      ..._pick(formData, fields),
    },
  });

  // Confirmation mail
  if (formData.email) {
    sendEmail(formData.email, TEMPLATES.CONTACT_GENERAL);
  }
};

module.exports = {
  add,
};
