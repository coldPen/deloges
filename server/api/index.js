const express = require('express');
const volunteer = require('./volunteer');

const api = express.Router();

api.get('/hello', (req, res) => {
  res.send('hello world!');
});

api.use('/volunteer', volunteer);

module.exports = api;
