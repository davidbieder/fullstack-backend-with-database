const express = require('express')
const router = express.Router()
const knex = require('../config/db')

router.get('/', (req, res) => {
  knex('test').select('value')
    .then((rows) => {
      console.log({rows})
      res.render('test', { data: rows[0] });
    })
    .catch(function (error) {
      console.error(error)
      res.render('error', { message: 'Error while retrieving data from database' , error });
    })
})

module.exports = router
