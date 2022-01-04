const Sequelize = require("sequelize");
const db = require("./database.js");

const Seed = db.define("seed", {
  name: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  waterLevel: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  isSeed: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isGrowing: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  readyToHarvest: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Seed;
