const express = require('express');
const fs = require('fs');
const mkdirp = require('mkdirp');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const notes = require('./routes/notes.js');
const reminders = require('./routes/reminders.js');

const app = express();

const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const mongoDB = (process.env.MONGODB_URI || 'mongodb://localhost') + '/notes';
mongoose.connect(mongoDB, {useMongoClient: true})
.then(() => console.log('Connection to MongoDB succeeded'))
.catch((err) => console.log('Connection to MongoDB failed'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + "/public/"));

app.use('/notes', notes);
app.use('/reminders', reminders);

app.listen(4000, function(){
  console.log("Server started at port 4000");
});
