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
  console.log(req.param('band'));
  var show = new Show();
  show.band = req.param('band');
  show.location = req.param('location');

  show.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    //res.json({message: 'Show created!'})
    res.redirect('/shows');
  });
};

// exports.show_create = [
//   body('band').isLength({ min: 1 }).trim().withMessage('A band must be listed.'),
//   body('location').isLength({ min: 1 }).trim().withMessage('A location must be listed.'),
//
//   (req, res, next) => {
//     const errors = validationResult(req);
//
//     if (errors) {
//       console.log(errors);
//     } else {
//       var show = new Show();
//       show.band = req.body.band;
//       show.location = req.body.location;
//
//       show.save(function(err) {
//         if (err) {
//           res.send(err);
//         }
//         res.json({message: 'Show created!'})
//       });
//     }
//   }
// ];
