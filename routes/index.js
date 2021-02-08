const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Have all the movies route
router.get('/movies')

module.exports = router;
