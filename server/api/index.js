const Router = require('express-promise-router');
const volunteer = require('./volunteer');
const signin = require('./signin');
const signout = require('./signout');

const api = Router();

api.get('/hello', (req, res) => {
  res.send('hello world!');
});

api.post('/signin', signin);
api.post('/signout', signout);

api.use('/volunteer', volunteer);

module.exports = api;
