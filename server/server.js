require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mtgConfidantAPI = require('./routes/DatabaseAPI')
const SCRYFALLAPI = require('./routes/scryfallAPI')
const login = require('./routes/login')
const passport = require('passport')
const passportSetup = require('./config/google-passport')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
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

/** ---------- PassPort ----------**/
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())


app.get('/', (req,res) =>{
  res.sendFile(path.join('build'));
});

/** ---------- SERVER ROUTES ---------- **/

app.use('/scryfallAPI', SCRYFALLAPI)
app.use('/mtgConfidantAPI', mtgConfidantAPI)
app.use('/login/auth', login)


