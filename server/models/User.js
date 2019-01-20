const { query, paginate, first } = require('./client');
const { USER_TYPES } = require('../constants');

const TABLE = 'users';

const read = id => first(query(TABLE).where({ id }));
const readAdmin = id => read(id).where('user_type', USER_TYPES.ADMIN);
const readVolunteer = id => read(id).where('user_type', USER_TYPES.VOLUNTEER);
const readDislodged = id => read(id).where('user_type', USER_TYPES.DISLODGED);

const list = ({ userType, email, login, genre }, options) => {
  const qb = paginate(query(TABLE), options);

  if (userType) {
    qb.where('user_type', userType);
  }

  if (email) {
    qb.where('email', email);
  }

  if (login) {
    qb.where('login', login);
  }

  if (genre) {
    qb.where('genre', genre);
  }

  return qb;
};

const create = data => first(query(TABLE).insert(data));

module.exports = {
  create,
  read,
  readAdmin,
  readVolunteer,
  readDislodged,
  list
};
