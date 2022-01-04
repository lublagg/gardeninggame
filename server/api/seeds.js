const router = require("express").Router();
const Seed = require("../db/seeds.js");

router.get("/", async (req, res, next) => {
  try {
    const seeds = await Seed.findAll();
    res.json(seeds);
  } catch (err) {
    next(err);
  }
});

router.get("/:seedId"),
  async (req, res, next) => {
    try {
      const seed = await Seed.findByPk(req.params.seedId);
      res.json(seed);
    } catch (err) {
      next(err);
    }
  };

module.exports = router;
