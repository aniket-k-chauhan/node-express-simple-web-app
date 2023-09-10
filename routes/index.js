const express = require("express");
const router = express.Router();

// render Home Page
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" });
});

module.exports = router;
