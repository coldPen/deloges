const bcrypt = require('bcryptjs');
const [, , password] = process.argv;

// eslint-disable-next-line no-console
console.log(bcrypt.hashSync(password, 10));
