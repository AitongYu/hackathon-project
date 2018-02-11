

// wiki.js - Wiki route module.

var express = require('express');
var app= express();

// var router = express.Router();

// Home page route.
app.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
// app.get('/about', function (req, res) {
//   res.send('About this wiki');
// })

app.listen(3000, function (){
    console.log("Server started on port 3000");
})
