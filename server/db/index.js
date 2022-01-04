const db = require("./database");
const Seed = require("./seeds");
const Gardener = require("./gardener");

Gardener.hasMany(Seed);

module.exports = { db, Seed, Gardener };
