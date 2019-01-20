const fs = require('fs');
const { client } = require('../models/client');
const queries = fs
  .readFileSync(`${__dirname}/../../db/tables.sql`, { encoding: 'utf8' })
  .split(/;/g);

(async () => {
  try {
    await queries.reduce(async (prev, query) => {
      await prev;
      return client.raw(query.trim());
    }, null);
  } catch (error) {
    console.log(`👎  ERROR:\n${error}`);
    process.kill('SIGKILL');
  }

  console.log('👍  database created');
  process.kill(0);
})();
