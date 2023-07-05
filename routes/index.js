var express = require('express');
var router = express.Router();

const myAPIKey = process.env.API_KEY


router.get('/movies', (req, res)=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${myAPIKey}`)
    .then(response => response.json())
    .then(data => res.json({movies: data.results}))
})

module.exports = router;
