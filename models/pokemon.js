var mongoose = require('mongoose');
var shortId = require('shortid');

var pokemonSchema = new mongoose.Schema({
  id: {
    type: String,
    default: shortId.generate(),
  },
  name: String,
  types: [String],
  image: String,
});

var pokemonsModel = mongoose.model('pokemonsModel', pokemonSchema);

module.exports = pokemonsModel;