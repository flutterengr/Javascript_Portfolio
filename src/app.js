//----------* GLOBAL REQUIRE'S *----------//
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const path = require('path');
const createError = require('http-errors');
const methodOverride =  require('method-override');
const cors = require('cors');

//----------* MIDDLEWARES REQUIRE *----------//
const setLog = require('./middlewares/setLog');   //-> Si se marca Recuerdame, pone en session al usuario de la cookie
const setLocals = require('./middlewares/setLocals');     //-> Guarda en locals la info del usuario en session
//----------* EXPRESS() *----------//
const app = express();
app.use(cookieParser());
app.use(session({
  secret: 'ChallengeNodeJs',
  resave: true,
  saveUninitialized: true
}));
//----------* MIDDLEWARES *----------//
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(setLog);
app.use(setLocals);


//----------* VIEW ENGINE SETUP *----------//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//----------* ROUTES REQUIRE *----------//
var usersRouter = require("./routes/users");
var moviesRouter = require("./routes/movies");


//----------* ROUTES USE() *----------//

app.use("/", moviesRouter);
app.use("/users", usersRouter);

//----------* CATCH 404 *----------//
app.use((req, res, next) => next(createError(404)));

//----------* ERROR HANDLER *----------//
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

//----------* EXPORTS APP *----------//
module.exports = app;