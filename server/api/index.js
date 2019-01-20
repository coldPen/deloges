const Router = require('express-promise-router');
const volunteer = require('./volunteer');
const dislodged = require('./dislodged');
const signin = require('./signin');
const signout = require('./signout');

const api = Router();

api.get('/hello', (req, res) => {
  res.send('hello world!');
});

api.post('/signin', signin);
api.post('/signout', signout);

api.use('/volunteer', volunteer);
api.use('/dislodged', dislodged);

module.exports = api;
