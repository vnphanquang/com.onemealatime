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

//--------------- Server Initiation ---------------
const hostname = '127.0.0.1';
const port = 3000;

//localhost server
app.listen(port, hostname, () => {
  console.log(`Express server running at http://${hostname}:${port}/ ...`);
});

