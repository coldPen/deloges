const express = require('express');
const Router = require('express-promise-router');
const proxyController = require('http-proxy-middleware');

const { API_ENDPOINT } = require('./constants');
const commonMiddleware = require('./middlewares/common');

/* ROUTER */
const router = Router();
router.use(commonMiddleware);
router.use('/api', proxyController({ target: API_ENDPOINT }));
router.use('/assets', express.static('public'));

/* APP */
const app = express();
app.use(router);

module.exports = app;
