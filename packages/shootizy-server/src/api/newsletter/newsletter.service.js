const mongoDb = require("db");
const { sendEmail, TEMPLATES } = require("email");
const _pick = require("lodash/pick");

const AVAILABLE_OPTINS = ["general", "partners"];
/**
 * Upsert new email
 * @param {string} email user email
 * @param {object} [optins] { }
 */
const upsert = async (email, optins = { general: true }) => {
  const db = await mongoDb.getInstance();

  // updateOne in node driver is not able to detect if update or insert
  const response = await db.collection("newsletter").update(
    { email },
    {
      email,
      ..._pick(optins, AVAILABLE_OPTINS),
    },
    { upsert: true }
  );

  if (response.result.nModified === 0) {
    // Inserted new email => send subscription mail - async in background
    sendEmail(email, TEMPLATES.NEWSLETTER_SUBSCRIPTION);
  }
};

module.exports = {
  upsert,
};
