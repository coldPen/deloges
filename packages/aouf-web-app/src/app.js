const express = require('express');
const Router = require('express-promise-router');
const proxyController = require('http-proxy-middleware');

const { API_ENDPOINT, BUNDLE_CLIENT_PATH } = require('./constants');
const commonMiddleware = require('./middlewares/common');
const renderController = require('./controllers/render');

/* ROUTER */
const router = Router();
router.use(commonMiddleware);
router.use('/api', proxyController({ target: API_ENDPOINT }));
router.use(
  '/assets',
  express.static(BUNDLE_CLIENT_PATH),
  express.static('src/public'),
);
router.use(renderController);

/* APP */
const app = express();
app.use(router);

module.exports = app;
