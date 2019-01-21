const {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_ENABLE_SSL
} = require('./src/constants');

module.exports = {
  client: 'mysql2',
  connection: {
    timezone: 'utc',
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: DB_ENABLE_SSL
  },
  pool: {
    min: 2,
    max: 10
  },
  useNullAsDefault: true,
  log: {
    /* eslint-disable no-console */
    warn: console.warn,
    error: console.error,
    deprecate: console.warn,
    debug: console.log
    /* eslint-enable no-console */
  },
  postProcessResponse: (res, { postProcess } = {}) =>
    postProcess ? postProcess(res) : res
};
