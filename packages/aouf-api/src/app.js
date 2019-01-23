const express = require('express');
const Router = require('express-promise-router');

const { GRAPHQL_ENDPOINT } = require('./constants');
const commonMiddleware = require('./middlewares/common');
const viewerMiddleware = require('./middlewares/viewer');
const graphqlController = require('./controllers/graphql');

/* ROUTER */
const router = Router();
router.use(commonMiddleware);
router.use('/assets', express.static('public'));
router.use(GRAPHQL_ENDPOINT, viewerMiddleware, graphqlController);

/* APP */
const app = express();
app.use(router);

module.exports = app;
