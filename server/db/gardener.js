const Sequelize = require("sequelize");
const db = require("./database.js");

const Gardener = db.define("gardener", {
  name: {
    type: Sequelize.STRING,
  },
  money: {
    type: Sequelize.INTEGER,
  },
  goodwill: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Gardener;
