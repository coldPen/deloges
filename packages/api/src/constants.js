require('dotenv').config();

const DEV_ENV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || `http://localhost:${PORT}`;
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'temporary-cookie-secret';
const JWT_SECRET = process.env.JWT_SECRET || 'temporary-jwt-secret';

/* DATABASE */
const DB_NAME = process.env.DB_NAME || 'aouf_app';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '8889';
const DB_USER = process.env.DB_USER || 'aouf';
const DB_PASSWORD = process.env.DB_PASSWORD || 'aouf';
const DB_ENABLE_SSL = process.env.DB_ENABLE_SSL || false;

/* MODEL */
const USER_TYPES = {
  ADMIN: 'administrator',
  VOLUNTEER: 'volunteer',
  DISLODGED: 'dislodged'
};

module.exports = {
  DEV_ENV,
  COOKIE_SECRET,
  JWT_SECRET,
  CORS_ORIGIN,
  PORT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_ENABLE_SSL,
  USER_TYPES
};
