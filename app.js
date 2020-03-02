var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Custom:
var indexRouter = require('./routes/index');
const exerciseRouter = require('./routes/exercise');
//const historicalRouter = require('./routes/historical');
//const routineRouter = require('./routes/routine');
//const trainmentRouter = require('./routes/trainment');
//const userRouter = require('./routes/user');
const errorRouter = require('./routes/errors');
//const dbManagerv = require('./util/dbManager').mongoConnect;


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
app.use('/exercises', exerciseRouter);
//app.use('/historicals', historicalController);
//app.use('/routines', routineController);
//app.use('/trainment', trainmentController);
//app.use('/users', userController);

// catch 404 and forward to error handler
app.use(errorRouter);

module.exports = app;
