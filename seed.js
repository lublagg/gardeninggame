const { db, Seed, Gardener } = require("./server/db");

const seed = async () => {
  await db.sync({ force: true });

  const blueberries = await Seed.create({
    name: "blueberries",
    type: "fruit",
    price: 5,
  });
  const tomatoes = await Seed.create({
    name: "tomatoes",
    type: "fruit",
    price: 3,
  });
  const peaches = await Seed.create({
    name: "peaches",
    type: "fruit",
    price: 4,
  });
  const strawberries = await Seed.create({
    name: "strawberries",
    type: "fruit",
    price: 4,
  });
  const blackberries = await Seed.create({
    name: "blackberries",
    type: "fruit",
    price: 4,
  });
  const pears = await Seed.create({
    name: "pears",
    type: "fruit",
    price: 4,
  });
  const watermelon = await Seed.create({
    name: "watermelon",
    type: "fruit",
    price: 4,
  });
  const cantaloupe = await Seed.create({
    name: "cantaloupe",
    type: "fruit",
    price: 4,
  });
  const zucchini = await Seed.create({
    name: "zucchini",
    type: "fruit",
    price: 4,
  });
  const pumpkin = await Seed.create({
    name: "pumpkin",
    type: "fruit",
    price: 4,
  });

  const carrots = await Seed.create({
    name: "carrots",
    type: "vegetable",
    price: 1,
  });
  const broccoli = await Seed.create({
    name: "broccoli",
    type: "vegetable",
    price: 3,
  });
  const spinach = await Seed.create({
    name: "spinach",
    type: "vegetable",
    price: 2,
  });
  const bellPeppers = await Seed.create({
    name: "bell peppers",
    type: "vegetable",
    price: 1,
  });
  const onions = await Seed.create({
    name: "yellow onions",
    type: "vegetable",
    price: 1,
  });
  const garlic = await Seed.create({
    name: "garlic",
    type: "vegetable",
    price: 1,
  });
  const swissChard = await Seed.create({
    name: "swiss chard",
    type: "vegetable",
    price: 1,
  });
  const cabbage = await Seed.create({
    name: "cabbage",
    type: "vegetable",
    price: 1,
  });

  const gardener1 = await Gardener.create({
    name: "Joe Planter",
    money: 100,
    goodwill: 20,
  });

  await gardener1.addSeed(blueberries);
  await gardener1.addSeed(peaches);
  await gardener1.addSeed(spinach);
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh no! Something went wrong!");
      console.error(err);
      db.close();
    });
}
