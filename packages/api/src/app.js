const express = require('express');
const Router = require('express-promise-router');

const commonMiddleware = require('./middlewares/common');

/* ROUTER */
const router = Router();
router.use(commonMiddleware);
router.use('/assets', express.static('public'));

/* APP */
const app = express();
app.use(router);

module.exports = app;
