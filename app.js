var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Custom:
var indexRouter = require('./routes/index');
const exerciseController = require('./controllers/exercise');
const historicalController = require('./controllers/historical');
const routineController = require('./controllers/routine');
const trainmentController = require('./controllers/trainment');
const userController = require('./controllers/user');
const errorController = require('./controllers/errors');
const dbManagerv = require('./util/dbManager').mongoConnect;


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', exerciseController);
app.use('/', historicalController);
app.use('/', routineController);
app.use('/', trainmentController);
app.use('/', userController);

// catch 404 and forward to error handler
app.use(errorController.get404);

module.exports = app;
