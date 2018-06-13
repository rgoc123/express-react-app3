var Show = require('../models/ShowModel');

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
}

exports.show_create = function(req, res){
  var show = new Show();

  show.band = "Linkin Park";
  show.location = "MSG";

  show.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Show created!'})
  });
};
