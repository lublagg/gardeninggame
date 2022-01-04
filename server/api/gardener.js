const router = require("express").Router();
const Gardener = require("../db/gardener.js");
const Seed = require("../db/seeds");

// get gardener
router.get("/", async (req, res, next) => {
  try {
    const gardener = await Gardener.findAll({
      include: [{ model: Seed }],
    });
    res.json(gardener);
  } catch (err) {
    next(err);
  }
});

// update gardener
router.put("/", async (req, res, next) => {
  try {
    const gardener = await Gardener.findAll({
      include: [{ model: Seed }],
    });
    res.send(await gardener.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
