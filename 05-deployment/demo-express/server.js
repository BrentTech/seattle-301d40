<<<<<<< HEAD
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
=======
'use strict';

// Load Express
const express = require('express');

// Instantiate Express so that we can use it
const app = express();

// Designate a port to serve our app on
const PORT = 3000;

// Define which directory that we will serve files from
app.use(express.static('./public'));

// Create a route for our bat-country file
app.get('/bats', (req, res) => {
  console.log('The bats route has been hit!!! Watch out! BATS!!!');
  res.status(200).sendFile('public/bat-country.html', {root: '.'});
});

// Tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));
>>>>>>> a0123c5e29e32794cdd1b006366b6b123153cdbb
