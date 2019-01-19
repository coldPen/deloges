const express = require('express');
const nunjucks = require('nunjucks');
const api = require('./api');
const commonMiddleware = require('./middlewares/common');
const hellworldController = require('./controllers/helloworld');

const app = express();
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.use(commonMiddleware);
app.use('/api/v1', api);
app.use('/assets', express.static('public'));
app.use('/helloworld', hellworldController);

module.exports = app;
