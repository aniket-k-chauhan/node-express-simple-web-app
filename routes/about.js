const express = require("express");
const router = express.Router();

// render about page
router.get("/", (req, res, next) => {
  res.render("about", { title: "About" });
});

module.exports = router;
