var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
  band: String,
  location: String
});

var Shows = mongoose.model('Shows', showSchema);

module.exports = Shows;
