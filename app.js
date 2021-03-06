'use strict';

//express
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//--------------- Routing ---------------
app.get('/', (req, res) => {
  res.render('index');
});
app.get('*', (req, res) => {
  res.redirect('/');
});
app.post('*', (req, res) => {
  res.redirect('/');
});


//--------------- Server Initiation ---------------
// const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

//localhost server
app.listen(PORT, () => {
  console.log(`Express server running at port: ${PORT}/ ...`);
});

