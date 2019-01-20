const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const Router = require('express-promise-router');
const api = require('./api');
const commonMiddleware = require('./middlewares/common');
// const headController = require('./controllers/head');
const helloWorldController = require('./controllers/helloworld');
const unlogedInviteController = require('./controllers/invitation-deloge');
const volunteerSignupController = require('./controllers/inscription-benevole');

const app = express();
const router = Router();
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.use(commonMiddleware);
app.use(router);

router.use('/api/v1', bodyParser.json(), api);

router.use('/helloworld', helloWorldController);
router.use('/invitation-deloge', unlogedInviteController);
router.use('/inscription-benevole', volunteerSignupController);

router.use('/assets', express.static('public'));

module.exports = app;
