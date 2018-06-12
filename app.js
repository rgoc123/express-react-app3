var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// API Service
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ExpressReactApp3')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var Shows = require('./models/ShowModel.js');

app.post('/testform', function(req, res){
  var show = new Shows();

  show.band = "Red Hot Chili Peppers";
  show.location = "Session 73";

  show.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Show created!'})
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
