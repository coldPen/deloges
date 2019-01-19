const express = require('express');
const api = require('./api');
const commonMiddleware = require('./middlewares/common');

const app = express();
app.use(commonMiddleware);
app.use('/api/v1', api);

module.exports = app;
