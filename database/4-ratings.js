db = db.getSiblingDB("shootizy");

db.ratings.insert([
  {
    date: new Date(),
    name: "Arnaud Gueras",
    score: 4,
    comment: "Shootizy is fucking great !",
  },
  {
    date: new Date(),
    name: "vivo",
    score: 3,
    comment: "It's ok !",
  },
]);
