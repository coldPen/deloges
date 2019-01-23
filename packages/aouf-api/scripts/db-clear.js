const { client } = require('../src/database/client');
const { clear } = require('../src/database/schema');

(async () => {
  try {
    await clear();
    // eslint-disable-next-line no-console
    console.log('👍  database cleared');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`👎  ERROR:\n${error}`);
  }
  client.destroy();
})();
