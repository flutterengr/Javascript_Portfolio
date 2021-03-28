var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var createError = require("http-errors");
var path = require("path");

const methodOverride = require("method-override");
const session = require("express-session");

var usersRouter = require("./routes/users");
var moviesRouter = require("./routes/movies");

const setLocals = require("./middlewares/setLocals");
const setLog = require("./middlewares/setLog"); //Si existe el recuerdame para no pisar la session con la cokkie

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(setLog);
app.use(setLocals);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use("/", moviesRouter);
app.use("/users", usersRouter);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialed: true,
  })
);

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

module.exports = app;
