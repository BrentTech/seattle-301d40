'use strict';

// load express
const express = require('express');

// Instantiate Express
const app = express();

// designate a port to serve
const PORT = 3000;

// define which directory that we will serve files from
app.use(express.static('./public'));

//create a route for our bat-country file
app.get('/bats', (req, res) => {
  console.log('the bats route has been hit, watch out! Bats!');
  res.status(200).sendFile('public/bat-country.html', {root: '.'});
})

//tell the app to listen
app.listen(PORT, () => console.log(`Our app is listening on ${PORT}`));
