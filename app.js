"use strict";
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

//const timeAgo = require('node-time-ago');

const app = express();
const PORT = process.env.PORT || 3000;

let Factory = require('./taxi_app');
const appFunc = Factory();

async function getResults(next) {
  try {
    let result = await appFunc.search('-33.971505, 18.563417');
    result.forEach((row) => {
      console.log(row.display_name);
    })  
  } catch (error) {
    console.log(error);
  }
}

getResults();


// geocoder.search( { q: '-33.9282, 18.4236' } )
//     .then((response) => {
//         response.forEach(result => {
//             console.log(result.display_name)
//         });
//     })
//     .catch((error) => {
//         console.log(error)
//     })


//middleware
app.engine('handlebars', exphbs({ 
  defaultLayout: 'main', 
  helpers : {}
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => res.render('home'));

// Start server on PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));