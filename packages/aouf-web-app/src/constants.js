require('dotenv').config();

const DEV_ENV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const API_ENDPOINT =
  process.env.API_ENDPOINT || 'http://localhost:3000/graphql';
const CORS_ORIGIN = process.env.CORS_ORIGIN || `http://localhost:${PORT}`;

/* CLIENT BUNDLE */
const BUNDLE_SERVER_PATH = './build/server';
const BUNDLE_CLIENT_PATH = './build/client';
const BUNDLE_MANIFEST_OUTPUT = 'manifest.json';
const {
  BUNDLE_PUBLIC_PATH,
  BUNDLE_DOM_NODE_ID,
} = require('./client/constants');

module.exports = {
  DEV_ENV,
  CORS_ORIGIN,
  PORT,
  API_ENDPOINT,
  BUNDLE_MANIFEST_OUTPUT,
  BUNDLE_DOM_NODE_ID,
  BUNDLE_SERVER_PATH,
  BUNDLE_CLIENT_PATH,
  BUNDLE_PUBLIC_PATH,
};
