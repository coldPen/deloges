require('dotenv').config();

const DEV_ENV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const API_ENDPOINT =
  process.env.API_ENDPOINT || 'http://localhost:3000/graphql';
const CORS_ORIGIN = process.env.CORS_ORIGIN || `http://localhost:${PORT}`;

module.exports = {
  DEV_ENV,
  CORS_ORIGIN,
  PORT,
  API_ENDPOINT,
};
