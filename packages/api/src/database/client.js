const knex = require('knex');
const config = require('../../knexfile');
const { DEV_ENV } = require('../constants');
const { UNKNOWN_ERROR } = require('../errors');

const client = knex(config);

const handleError = error => {
  if (DEV_ENV) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  throw new Error(UNKNOWN_ERROR);
};

const addPostProcess = (queryBuilder, postProcess) => {
  const prevPostProcess = queryBuilder.postProcess;
  // eslint-disable-next-line no-param-reassign
  queryBuilder.postProcess = res =>
    postProcess(prevPostProcess ? prevPostProcess(res) : res);
  queryBuilder.queryContext({ postProcess: queryBuilder.postProcess });

  return queryBuilder;
};

const query = table => client(table).on('error', handleError);

const paginate = (queryBuilder, { offset, limit } = {}) => {
  if (offset) {
    queryBuilder.offset(offset);
  }

  if (limit) {
    queryBuilder.limit(limit);
  }

  return queryBuilder;
};

const first = queryBuilder =>
  addPostProcess(
    paginate(queryBuilder, { offset: 0, limit: 1 }),
    ([res]) => res
  );

module.exports = { client, query, paginate, first };
