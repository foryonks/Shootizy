const { MongoClient, ObjectID } = require("mongodb");
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

const getObjectId = _id => new ObjectID(_id);
const getNewObjectId = () => ObjectID.createFromTime();

module.exports = { getInstance, getObjectId, getNewObjectId };
