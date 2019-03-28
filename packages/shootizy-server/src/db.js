const MongoClient = require("mongodb").MongoClient;
const logger = require("logger");

let instance;

const getInstance = async () => {
  if (!instance) {
    const { DB_CONN_STR, DB_NAME } = process.env;
    const client = new MongoClient(DB_CONN_STR, { useNewUrlParser: true });
    logger.info("Connecting to MongoDB database...");
    await client.connect();
    instance = client.db(DB_NAME);
  }
  return instance;
};

module.exports = { getInstance };
