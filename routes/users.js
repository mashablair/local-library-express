var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", { user: "Masha" });
});

router.get("/cool", function (req, res, next) {
  res.send("You are so cool!");
});

router.get("/data", function (req, res, next) {
  res.json({ name: "masha" });
});

module.exports = router;
