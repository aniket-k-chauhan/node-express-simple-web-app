const createError = require("http-errors");
const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const apiRouter = require("./routes/api");

const app = express();
const port = 3000;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/static", express.static(path.join(__dirname, "public")));

// Home endpoint
app.use("/", indexRouter);

// About endpoint
app.use("/about", aboutRouter);

// API endpoint
app.use("/api", apiRouter);

// API data endpoint
app.get("/api-data", (req, res) => {
  const data_obj = {
    books: [
      "The Midnight Library",
      "The Psychology of Money: Timeless Lessons on Wealth, Greed and Happiness",
      "The Subtle Art of Not Giving a F*ck",
      "Murder on The Orient Express",
      "Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time",
      "Actionable Gamification: Beyond Points, Badges, and Leaderboards",
    ],
    products: [
      "Pens",
      "Pencils",
      "Books",
      "Bookmarks",
      "Reading lights",
      "Journals",
      "Planners",
      "Diaries",
    ],
    users: [
      "Aniket Chauhan",
      "Kishan Lalvadiya",
      "Harsh Sandigada",
      "Shahinbanu Bodeliwala",
      "Rahul Gajjar",
      "Vivek Kadam",
    ],
  };
  res.send({ data: data_obj });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () =>
  console.log(`simple-web-app is listining on port ${port}`)
);
