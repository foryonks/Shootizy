db = db.getSiblingDB("shootizy");

db.ratings.insert([
  {
    date: new Date(),
    shootingDate: new Date(),
    name: "Nicolas Batel",
    score: 5,
    comment: "Shootizy is fucking great !",
    isConfirmed: true,
  },
  {
    date: new Date(),
    shootingDate: new Date(),
    name: "Medy Boo",
    score: 4,
    comment: "It's ok !",
    isConfirmed: true,
  },
  {
    date: new Date(),
    shootingDate: new Date(),
    name: "Medy",
    score: 2,
    comment: "It can be better !",
    isConfirmed: true,
  },
]);
