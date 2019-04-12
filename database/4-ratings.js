db = db.getSiblingDB("shootizy");

db.ratings.insert([
  {
    date: new Date(),
    shootingDate: new Date(),
    name: "Arnaud Gueras",
    score: 4,
    comment: "Shootizy is fucking great !",
    isConfirmed: true,
  },
  {
    date: new Date(),
    shootingDate: new Date(),
    name: "Viet Vo",
    score: 3,
    comment: "It's ok !",
    isConfirmed: true,
  },
]);
