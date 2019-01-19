require('dotenv').config();

const DEV_ENV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || `http://localhost:${PORT}`;
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'temporary-cookie-secret';

module.exports = {
  DEV_ENV,
  COOKIE_SECRET,
  CORS_ORIGIN,
  PORT
};
