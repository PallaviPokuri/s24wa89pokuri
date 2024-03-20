var express = require('express');
var router = express.Router();

/* GET the page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Pallavi Pokuri' });
});

module.exports = router;
