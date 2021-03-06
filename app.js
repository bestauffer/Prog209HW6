var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// default page 
app.get('/default', function(req, res) {
    res.render('pages/index');
});

// upLoadData page 
// sending a get with 1 param
// http://localhost:3000/uploadData?id=2
app.get('/uploadData', function(req, res) {
    let idVar = req.param('id');
    let msgVar = req.param('msg');
    // passing an object, used like a dictionary, to the render code
    res.render('pages/uploadData', { 
        value1PassedToRenderPage: idVar,
        value2PassedToRenderPage: msgVar
     });
  });

// Movies page 
app.get('/movies', function(req, res) {
    let movie1 = "Avengers";
    let movie2 = "Animal House";
    let movie3 = "Alien";
    let movie4 = "Star Wars";
    res.render('pages/movies', {
    movie1PassedToRenderPage: movie1,
    movie2PassedToRenderPage: movie2,
    movie3PassedToRenderPage: movie3,
    movie4PassedToRenderPage: movie4
    });
});

// tvshows page 
app.get('/tvshows', function(req, res) {
    let tvShow1 = "WandaVision";
    let tvShow2 = "Firefly Lane";
    let tvShow3 = "The Sinner";
    let tvShow4 = "Attack on Titan";
    res.render('pages/tvshows',{
        tvShowOne: tvShow1,
        tvShowTwo: tvShow2,
        tvShowThree: tvShow3,
        tvShowFour: tvShow4
    });
});

// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "some text from someplace";
    let errorObject ={
        status: "this is real bad",
        stack: "somebody called #$% somebody who called somebody <awful>"
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: errorObject
    });
});



app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
