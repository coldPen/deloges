const express = require('express');
const nunjucks = require('nunjucks');
const api = require('./api');
const commonMiddleware = require('./middlewares/common');
// const headController = require('./controllers/head');
const helloWorldController = require('./controllers/helloworld');
const unlogedInviteController = require('./controllers/invitation-deloge');
const volunteerSignupController = require('./controllers/inscription-benevole');

const app = express();
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.use(commonMiddleware);
app.use('/api/v1', api);
app.use('/assets', express.static('public'));
app.use('/helloworld', helloWorldController);
app.use('/invitation-deloge', unlogedInviteController);
app.use('/inscription-benevole', volunteerSignupController);

module.exports = app;
