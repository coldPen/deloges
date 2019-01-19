const app = require('./app');
const { PORT } = require('./constants');

const server = app.listen(PORT, err => {
  /* eslint-disable no-console */
  if (err) {
    console.log(`👎  server failed to listen on port ${PORT}: ${err.code}`);
  } else {
    console.log(`👍  server listening on port ${PORT}`);
  }
  /* eslint-enable no-console */
});

// close server when nodemon restarts or stop
process.once('SIGUSR2', () => {
  /* eslint-disable no-console */
  console.log('😴  server closing');
  server.close(() => {
    console.log('👌  server closed');
    process.kill(process.pid, 'SIGUSR2');
  });
  setTimeout(() => {
    console.log('⚠️  server killed');
    process.kill(process.pid, 'SIGUSR2');
  }, 5000);
  /* eslint-enable no-console */
});
