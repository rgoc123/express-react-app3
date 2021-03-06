var Show = require('../models/ShowModel');

var async = require('async');
// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

exports.index = function(req, res) {
  Show.find(function(err, shows) {
    if (err) {
      res.send(err);
    }
    res.json(shows);
  });
};

exports.show_test = function(req, res) {
  console.log("Heyyy");
};

exports.show_create = function(req, res) {
  var show = new Show();
  show.band = req.param('band');
  show.location = req.param('location');

  show.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.redirect('/shows');
  });
};

exports.show_get = function(req, res, next) {
  Show.findById(req.params.id, function(err, show) {
    if (!show) {
      return next(new Error('Could not load Document'));
    } else {
      res.send(show);
    }
  });
};

exports.show_edit = function(req, res, next) {
  Show.findById(req.params.id, function(err, show) {
    if (!show) {
      return next(new Error('Could not load Document'));
    } else {
      show.band = req.param('band');
      show.location = req.param('location');

      show.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.redirect('/shows');
      });
    }
  });
};

exports.show_delete = function(req, res) {
  console.log(req.params.id);
  var show = Show.findById(req.params.id);

  show.remove(function(err) {
    if (err) {
      res.send(err);
    }
  });
};
