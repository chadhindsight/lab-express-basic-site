const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse the json that you get
app.use(bodyParser.json());
app.use(express.static("public"));
// Setup view stuff
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home.ejs')
})

app.get('/gallery', function (req, res) {
    res.render('gallery.ejs')
})

app.get('/work', function (req, res) {
    res.render('work.ejs')
})

app.get('/about', function (req, res) {
    res.render('about.ejs')
})



app.listen(3000, console.log('Up and running on port 3000'))