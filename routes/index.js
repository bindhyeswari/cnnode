var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/resource', function(req, res) {
    res.render('angular', { title: 'Express' });
});

module.exports = router;
