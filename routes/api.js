const express = require("express");
const router = express.Router();

// middleware to fetch data
router.use("/", async (req, res, next) => {
  try {
    const api_data_baseurl =
      req.app.get("env") === "development"
        ? "http://localhost:3000"
        : "https://simple-nodejs-expressjs-web-app.vercel.app";
    const response = await fetch(api_data_baseurl + "/api-data");
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
