const { client } = require('../src/database/client');
const { create } = require('../src/database/schema');

(async () => {
  try {
    await create();
    // eslint-disable-next-line no-console
    console.log('👍  database created');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`👎  ERROR:\n${error}`);
  }
  client.destroy();
})();
