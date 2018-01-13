const express = require('express');
const promise = require('bluebird');
const mongoose = require('mongoose');
const router = express.Router();

promise.promisifyAll(mongoose);

const Reminder = mongoose.model('Reminder', new mongoose.Schema({
  task: { type: 'String', required: true },
  date: { type: 'Date', default: Date.now },
  done: { type: 'Boolean', required: true }
}));

var options = {
        sort: { date: 1 }		
};

router.get('/', function(req, res) {
  Reminder.findAsync({}, null, options)
  .then(function(reminders) {
    res.send(reminders);
  })
  .error(function(err) {
    throw err;
  });
});

router.post('/', function(req, res) {
  var reminder = new Reminder(req.body);
  reminder.saveAsync()
  .then(function(reminder) {
    Reminder.findAsync()
    .then(function(reminders) {
      res.send(reminders);
    })
    .error(function(err) {
      throw err;
    });
  })
  .error(function(err) {
    throw err;
  });
});

module.exports = router;
