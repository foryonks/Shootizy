const jwt = require("jsonwebtoken");
const _pick = require("lodash/pick");
const { CustomError } = require("api/api.errors");
const mongoDb = require("db");

/**
 * Login
 * @param {string} username
 * @param {string} password
 */
const login = async (username, password) => {
  const { JWT_SECRET, JWT_EXPIRATION } = process.env;

  try {
    const user = await getUser(username, password);
    const signFormattedUser = _pick(user, ["username", "isAdmin"]);
    const token = jwt.sign({ user: signFormattedUser }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION, // expires time
    });
    return { token, user: signFormattedUser };
  } catch (e) {
    throw new CustomError("Login failed", 403);
  }
};

/**
 * Get user
 * @param {string} username
 * @param {string} password
 */
const getUser = async (username, password) => {
  const db = await mongoDb.getInstance();
  const user = await db.collection("users").findOne({
    username,
    password,
  });

  if (!user) {
    throw new CustomError("User not found", 404);
  }
  return user;
};

module.exports = {
  login,
};
