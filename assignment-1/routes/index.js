var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var HousePrice = mongoose.model('Houseprice');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET the Monthly House Price Index */
//model.find({}).sort({ field : criteria}).exec(function(err, model){ ... });

router.get('/houseprice', function(req, res, next) {
  HousePrice.find({}).sort({"Year" : 1, "Quarter" : 1}).exec(function(err, model) {
    if(err){ return next(err); }

    res.json(model);
  });
});

module.exports = router;
