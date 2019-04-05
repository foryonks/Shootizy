const conn = new Mongo();
const db = conn.getDB("shootizy");

db.users.insert([
  {
    username: "admin",
    password: "admin@shootizy!",
    isAdmin: true,
  },
  {
    username: "guest",
    password: "guest!",
    isAdmin: false,
  },
]);

// Create index for fast search
db.users.createIndex({ username: 1 }, { unique: true });
