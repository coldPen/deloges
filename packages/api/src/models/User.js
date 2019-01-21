const bcrypt = require('bcryptjs');
const { query, paginate, first } = require('../database/client');
const { EMAIL_ALREADY_SIGNED_UP } = require('../errors');

const TABLE = 'user';

const authenticate = async ({ email, password }) => {
  const user = await first(query(TABLE)).where({ email });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return false;
  }

  return user;
};

const read = id => first(query(TABLE).where({ id }));

const list = ({ email, userName }, options) => {
  const qb = paginate(query(TABLE), options);

  if (email) {
    qb.where('email', email);
  }

  if (userName) {
    qb.where('userName', userName);
  }

  return qb;
};

const create = data => first(query(TABLE).insert(data));

const signupVolunteer = async ({ userName, email, password, phone }) => {
  if (await first(query(TABLE)).where({ email })) {
    throw new Error(EMAIL_ALREADY_SIGNED_UP);
  }

  return create({
    userName,
    email,
    phone,
    password: bcrypt.hashSync(password, 10),
    isVolunteer: true
  });
};

module.exports = {
  authenticate,
  create,
  read,
  list,
  signupVolunteer
};
