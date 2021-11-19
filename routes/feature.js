var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/* options */)
var db = pgp(process.env.DATABASE_URL)

router.get('/', function(req, res, next) {
  db.one('SELECT value FROM test')
    .then(function (data) {
      res.render('feature', { data });
    })
    .catch(function (error) {
      console.error(error)
      res.render('error', { message: 'Error while retrieving data from database' , error });
    })
});

module.exports = router;
