const { client } = require('../src/database/client');
const { destroy } = require('../src/database/schema');

(async () => {
  try {
    await destroy();
    // eslint-disable-next-line no-console
    console.log('👍  database destroyed');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`👎  ERROR:\n${error}`);
  }
  client.destroy();
})();
