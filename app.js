"use strict";
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//const timeAgo = require('node-time-ago');



// import handlebars and body-parser
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(express.static('public'));

// handlebars
app.engine('handlebars', exphbs({ 
  defaultLayout: 'main', 
  helpers : {}
}));

app.set('view engine', 'handlebars');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => console.log("listening on port ", PORT));