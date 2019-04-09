db = db.getSiblingDB("shootizy");

// Delete old data
db.dropDatabase();

load("database/1-users.js");
load("database/2-contents.js");
load("database/3-products.js");
