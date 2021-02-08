const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model.js');


//Have all the movies route to show on the view
router.get('/movies', (req, res) => {
    Movie.find().then((allMoviesFromDB) => {
       // console.log(allMoviesFromDB); used this to check why the movie list wasn't printing, if it was a front or backend issue
        res.render('movies', {movies: allMoviesFromDB})
    });
});

//route for the "See More"
router.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    Movie.findById(id).then((movie) => {
      //Server-side rendering
      res.render('movie-details', movie);
    });
  });


module.exports = router;