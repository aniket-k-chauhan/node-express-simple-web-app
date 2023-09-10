const express = require("express");
const router = express.Router();

// middleware to fetch data
router.use("/", async (req, res, next) => {
  try {
    const response = await fetch("http://localhost:3000/api-data");
    const data = await response.json();
    res.locals.apiData = data;
    next();
  } catch (err) {
    next(err);
  }
});

// render api page
router.get("/", (req, res, next) => {
  res.render("api", { title: "API", data: res.locals.apiData.data });
});

module.exports = router;
