require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mtgConfidantAPI = require('./DatabaseAPI')
const app = express();
const port = process.env.PORT || 5000;

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Listening on port: ', port);
});

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- SERVER ROUTES ---------- **/
app.get('/app', (req,res) =>{
  res.sendFile(path.join('build'));
});

app.use('/mtgConfidantAPI', mtgConfidantAPI)


