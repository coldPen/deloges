const express = require('express');

const api = express.Router();

api.get('/hello', (req, res) => {
  res.send('hello world!');
});

module.exports = api;
