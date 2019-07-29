const logger = require("logger");
const nodemailer = require("nodemailer");
const mongoDb = require("db");

const TEMPLATES = {
  BOOKING_CONFIRM: "BOOKING_CONFIRM",
  BOOKING_CANCEL: "BOOKING_CANCEL",
  CONTACT_GENERAL: "CONTACT_GENERAL",
  NEWSLETTER_SUBSCRIPTION: "NEWSLETTER_SUBSCRIPTION",
};

let instance;
const getInstance = () => {
  if (!instance) {
    instance = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USERNAME, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    logger.info("Email transporter created");
  }
  return instance;
};

/**
 * Apply contents to template
 * @param {string} templateHtml template html contents
 * @param {object} contents extra contents to replace tags in templates
 */
const applyContents = (templateHtml, contents) => {
  return Object.keys(contents).reduce(
    (acc, key) => acc.replace(`[${key}]`, contents[key]),
    templateHtml
  );
};

/**
 * Send email to a receiver
 * @param {string} to receiver
 * @param {string} templateId template id
 * @param {object} contents extra contents to replace tags in templates
 */
const sendEmail = async (to, templateId, contents = {}) => {
  try {
    const db = await mongoDb.getInstance();
    const template = await db.collection("emailTemplates").findOne({
      templateId,
    });
    if (template) {
      const { subject, html } = template;

      const instance = getInstance();
      const info = await instance.sendMail({
        from: process.env.EMAIL_SENDER,
        to,
        subject,
        html: applyContents(html, contents),
      });
      logger.info(`Email sent: ${JSON.stringify(info)}`);
    } else {
      logger.error(`Email template not found`);
    }
  } catch (e) {
    logger.error(`Error sending mail: ${e}`);
  }
};

/**
 * Send notification email to admin
 * @param {string} subject email subject
 * @param {object} data form data
 */
const adminNotificationEmail = async (subject, data) => {
  const admin = process.env.EMAIL_NOTIFICATION;

  if (admin) {
    try {
      const instance = getInstance();
      const info = await instance.sendMail({
        from: admin,
        to: admin,
        subject: `[SHOOTIZY-NOTIF] ${subject}`,
        html: JSON.stringify(data, null, 4),
      });
      logger.info(`Admin notification email sent: ${JSON.stringify(info)}`);
    } catch (e) {
      logger.error(`Error sending mail: ${e}`);
    }
  }
};

module.exports = { sendEmail, adminNotificationEmail, TEMPLATES };
