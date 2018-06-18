var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
  band: {type: String, required: false},
  location: {type: String, required: false}
});

var Shows = mongoose.model('Shows', showSchema);

module.exports = Shows;
