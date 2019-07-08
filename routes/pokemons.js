var express = require('express');
var Pokemon = require('.././models/pokemon');
var app = express()
var router = express.Router();


router.post('/', function(req, res, next) {
  let { name, types, image } = req.body;
  Pokemon.create({
    name,  
    types,
    image,
  }, function(err, pokemon) {
    if (err || !pokemon) {
      return res.status(400).json({
        success: false,
        error: 'Could not create pokemon',
      });
    }
    res.status(200).json({
      success: true,
      data: pokemon,
    });
  });
});

router.get('/', function(req, res, next) {
  Pokemon.find({}, function(err, pokemons) {
    if (err) {
      return res.status(400).json({
        success: false,
        error: 'Could not get pokemons',
      });
    }
    if (!pokemons) {
      return res.status(404).json({
        success: false,
        error: 'Could not find pokemons',
      });
    }
    res.status(200).json({
      success: true,
      data: pokemons,
    });
  });
});

router.delete('/', function(req, res, next) {
  Pokemon.remove({name: req.body.name}, function (err) {
    if (err) {
      return res.status(400).json({
        success: false,
        error: 'Could not delete',
      });
    } 
    res.status(200).json({
      success: true,
    });
  })
})  ;

module.exports = router;