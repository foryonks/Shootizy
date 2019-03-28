const conn = new Mongo();
const db = conn.getDB("shootizy");

// Delete old data
db.dropAllUsers();
db.dropDatabase();

// Create app user
db.createUser({
  user: "shootizywebapp",
  pwd: "yourStrong(!)Password",
  roles: [{ role: "readWrite", db: "shootizy" }],
});
