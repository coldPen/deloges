const Router = require('express-promise-router');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const { DEV_ENV, COOKIE_SECRET, CORS_ORIGIN } = require('../constants');

const commonMiddleware = Router();

/* Request logger */
commonMiddleware.use(morgan(DEV_ENV ? 'dev' : 'combined'));

/* Cross-origin resource sharing (CORS) */
commonMiddleware.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || CORS_ORIGIN.split(',').indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error(`Origin "${origin}"" not allowed by CORS`));
      }
    },
    credentials: true
  })
);

/* User session */
commonMiddleware.use(
  session({
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

module.exports = commonMiddleware;
