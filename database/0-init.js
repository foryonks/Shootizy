db = db.getSiblingDB("shootizy");

// Delete old credential
db.dropAllUsers();

// Create app credential
db.createUser({
  user: "shootizywebapp",
  pwd: "yourStrong(!)Password",
  roles: [{ role: "readWrite", db: "shootizy" }],
});
